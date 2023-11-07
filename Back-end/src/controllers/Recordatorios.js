const { Cita } = require('../../db');

module.exports = async () => {
  try {
    // Determinar intervalo de tiempo que incluye las citas programadas para recordatorio
    const inicioIntervalo = momento.startOf('day');
    const finIntervalo = momento.add(1, 'day').startOf('day');
    console.log(`Buscando citas programadas para recordatorio entre ${inicioIntervalo} y ${finIntervalo}...`);

    // Encontrar citas programadas para recordatorio
    const citas = await Cita.findAll({
      where: {
        fecha: {
          $gte: inicioIntervalo,
          $lt: finIntervalo
        }
      },
    });

    console.log(`Encontradas ${citas.length} citas programadas para recordatorio...`);

    let enviados = 0;

    for (let i = 0; i < citas.length; i++) {
      const cita = citas[i];

      const cuerpoCorreo = `Hola ${cita.paciente.nombre}, este es un recordatorio de tu cita con el Dr. ${cita.medico.nombre} el día ${cita.fecha.toLocaleDateString()} a las ${cita.fecha.toLocaleTimeString()}. Por favor confirma tu asistencia.`;

      await sendEmail(cita.paciente.email, 'Recordatorio de cita médica', cuerpoCorreo);

      enviados++;
    }

    console.log(`Enviados ${enviados} correos electrónicos de recordatorio.`);
  } catch (err) {
    console.error('Ha ocurrido un error al enviar los correos electrónicos de recordatorio:', err);
  }
};

     
