const { Cliente } = require('../../db');

module.exports = async (clienteData) => {
  try {
    // Verificar si ya existe un cliente con el mismo nombre
    const existingcliente = await Cliente.findOne({
      where: {
        name: clienteData.correo_electronico,
      },
    });

    // Si ya existe un cliente con el mismo nombre, lanzar un error
    if (existingcliente) {
      const error = new Error('Ya existe un cliente con este nombre.');
      error.status = 400;
      throw error;
    }

    // Si no existe un cliente con el mismo nombre, crear el nuevo cliente
    const newcliente = await Cliente.create(clienteData);
    newcliente.dataValues.id = `usuario-${newcliente.dataValues.id}`;
    return newcliente;
    
  } catch (error) {
    console.error('Error al agregar el cliente:', error);
    throw error;
  }
};
