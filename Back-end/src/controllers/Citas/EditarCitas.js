const { Cita } = require('../../db');

module.exports = async (citaId, descripcion, estado) => {
  try {
    // Buscar el cliente por su ID
    const cita = await Cita.findByPk(citaId);

    if (!cita) {
      // Si no se encuentra el cliente, lanzar un error
      const error = new Error('La cita no existe.');
      error.status = 404;
      throw error;
    }

    // Actualizar los datos del cliente
    await cita.update({descripcion: descripcion, estado: estado});

    // Devolver la cita actualizada
    return cita;
  } catch (error) {
    console.error('Error al actualizar la cita', error.message);
    throw error;
  }
};
