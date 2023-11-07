const { Cliente } = require('../../db');

module.exports = async (clienteId) => {
  try {
    // Buscar el cliente por su ID
    const cliente = await Cliente.findByPk(clienteId);

    // Si no se encuentra el cliente, lanzar un error
    if (!cliente) {
      const error = new Error('El cliente no existe.');
      error.status = 404;
      throw error;
    }
    
    // Actualizamos la propiedad activa a true
    await cliente.update({ activa: true });

    cliente.dataValues.id = `usuario-${cliente.dataValues.id}`;
    return cliente;

  } catch (error) {
    console.error('Error al cambiar el estado del cliente:', error.message);
    throw error;
  }
};
