const { Cita } = require('../../db');

module.exports = async ({clienteId, fecha, descripcion, medicoId, cliente_name, medico_name}) => {
    try {

   const nuevaCita = Cita.create({
        fecha,
        descripcion,
        estado: "pendiente",
        clienteId,
        medicoId,
        medico_name,
        cliente_name
      })

      return nuevaCita
        
    } catch (error) {
      console.log('Error al crear la cita');
      throw error;
    }
  };
