const { Admin } = require('../../db');

module.exports = async (adminData) => {
  try {
    // Verificar si ya existe un cliente con el mismo nombre
    const existingAdmin = await Admin.findOne({
      where: {
        name: adminData.correo_electronico,
      },
    });

    // Si ya existe un cliente con el mismo nombre, lanzar un error
    if (existingAdmin) {
      const error = new Error('Ya existe un cliente con este nombre.');
      error.status = 400;
      throw error;
    }

    // Si no existe un cliente con el mismo nombre, crear el nuevo cliente
    const newAdmin = await Admin.create(adminData);
    newAdmin.dataValues.id = `usuario-${newAdmin.dataValues.id}`;
    return newAdmin;
    
  } catch (error) {
    console.error('Error al agregar el admin:', error);
    throw error
  }
}