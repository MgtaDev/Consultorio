const { Medico } = require('../../db');

module.exports = async (medicoId) => {
  try {
    // Buscar el cliente por su ID
    const medico = await Medico.findByPk(medicoId);

    if (!medico) {
      // Si no se encuentra el cliente, lanzar un error
      const error = new Error('El medico no existe.');
      error.status = 404;
      throw error;
    }

    // Actualizar la propiedad activa a false
    await medico.update({ activa: false });
    // Devolver el cliente actualizado
    return medico;
  } catch (error) {
    console.error('Error al desactivar el medico', error.message);
    throw error;
  }
};
