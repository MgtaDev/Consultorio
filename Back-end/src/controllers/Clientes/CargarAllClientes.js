const { Cliente } = require('../../db');

module.exports = async (clienteArray) => {
  const clientes = [];

  async function crearcliente(clienteData) {
    try {
      // Verificar si ya existe un cliente con el mismo nombre
      const existingClient = await Cliente.findOne({
        where: {
          name: clienteData.name,
        },
      });

      // Si ya existe un cliente con el mismo nombre, lanzar un error
      if (existingClient) {
        throw new Error(`Ya existe el cliente ${clienteData.nombre}`);
      }

      // Si no existe un cliente con el mismo nombre, crear el nuevo cliente
      const newcliente = await Cliente.create(clienteData);
    
      clientes.push(newcliente);


    } catch (error) {
      console.error('Error al crear los clientes:', error.message);
      throw error;
    }
  }

  try {
    await Promise.all(clienteArray.map(crearcliente));
    return clientes;
  } catch (error) {
    throw error;
  }
};
