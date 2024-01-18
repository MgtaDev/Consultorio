const { Cita } = require('../../db');

module.exports = async ({clienteId, fecha, descripcion, medicoId, cliente_name, medico_name, nombre, tipo_cita, apellido,email, numero, cedula_identidad, genero,fecha_nacimiento}) => {
    try {

   const nuevaCita = Cita.create({
        fecha,
        descripcion,
        estado: "pendiente",
        clienteId,
        medicoId,
        medico_name,
        cliente_name,
        tipo_cita,
        datos_del_paciente: {
          nombre,
          apellido,
          email,
          numero,
          cedula_identidad,
          genero,
          fecha_nacimiento
        }
        
      })

      return nuevaCita
        
    } catch (error) {
      console.log('Error al crear la cita');
      throw error;
    }
  };
