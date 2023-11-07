const { Medico } = require('../../db');

module.exports = async (medicoId, dataToUpdate) => {
  try {
    // Buscar el cliente por su ID
    const medico = await Medico.findByPk(medicoId);

    if (!medico) {
      // Si no se encuentra el cliente, lanzar un error
      const error = new Error('El medico no existe.');
      error.status = 404;
      throw error;
    }

    // Actualizar los datos del cliente
    await medico.update(dataToUpdate);

    // Concatenar "cli-" al ID del cliente actualizado
    medico.dataValues.id = `medico-${medico.dataValues.id}`;
    

    // Devolver el cliente actualizado
    return medico;
  } catch (error) {
    console.error('Error al actualizar el medico', error.message);
    throw error;
  }
};
