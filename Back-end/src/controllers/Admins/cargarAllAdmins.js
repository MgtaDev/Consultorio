const { Admin } = require('../../db');

module.exports = async (adminArray) => {
  const admins = [];

  async function crearAdmins(adminData) {
    try {
      // Verificar si ya existe un administrador con el mismo nombre
      const existingAdmin = await Admin.findOne({
        where: {
          name: adminData.name,
        },
      });

      // Si ya existe un administrador con el mismo nombre, lanzar un error
      if (existingAdmin) {
        throw new Error(`Ya existe el admin ${adminData.nombre}`);
      }
 
      // Si no existe un administrador con el mismo nombre, crear el nuevo administrador
      const newAdmin = await Admin.create(adminData);
      newAdmin.dataValues.id = `admin-${newAdmin.dataValues.id}`;
      admins.push(newAdmin);


    } catch (error) {
      console.error('Error al crear los administradores:', error.message);
      throw error;
    }
  }

  try {
    await Promise.all(adminArray.map(crearAdmins));
    return admins;
  } catch (error) {
    throw error;
  }
};
