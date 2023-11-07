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

    // Actualizar la propiedad activa a true
    await medico.update({ activa: true });

    
    medico.dataValues.id = `medico-${medico.dataValues.id}`;
    // Devolver el cliente actualizado
    return medico;
  } catch (error) {
    console.error('Error al cambiar el estado del medico', error.message);
    throw error;
  }
};
