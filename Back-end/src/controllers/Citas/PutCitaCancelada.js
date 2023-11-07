const { Cita } = require('../../db');

module.exports = async (clienteId, medicoId, citaId) => {
  try {
    // Buscar las citas que tengan el clienteId especificado
    const cita = await Cita.findOne({
      where: { medicoId, clienteId, id: citaId},
    });

    // Si no hay citas, retornar un mensaje
    if (!cita || cita.length === 0) {
      console.log(`No hay cita para el cliente ${clienteId} y el medico ${medicoId}`);
      return [];
    }

    cita.estado = "cancelada"

    // Retornar la cita modificada
    return cita;

  } catch (error) {
    console.error('Error al buscar las citas del medico', error.message);
    throw error;
  }
};