const { Medico, Cita } = require('../../db');

module.exports = async (medicoId) => {
  try {
    // Buscar las citas que tengan el clienteId especificado
    const citas = await Cita.findAll({
      where: { medicoId },
    });

    // Si no hay citas, retornar un mensaje
    if (!citas || citas.length === 0) {
      console.log(`No hay citas para el cliente ${medicoId}`);
      return [];
    }

    // Retornar todas las citas encontradas
    return citas;

  } catch (error) {
    console.error('Error al buscar las citas del medico', error.message);
    throw error;
  }
};