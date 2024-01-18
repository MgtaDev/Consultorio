const { Medico } = require('../../db');

module.exports = async (medicosArray) => {
  const medicos = [];

  async function crearMedico(medicoData) {
    try {
      // Verificar si ya existe un cliente con el mismo nombre
      const existingMedico = await Medico.findOne({
        where: {
          name: medicoData.name,
        },
      });

      // Si ya existe un cliente con el mismo nombre, lanzar un error
      if (existingMedico) {
        throw new Error(`Ya existe este Medico ${medicoData.nombre}`);
      }

      // Si no existe un cliente con el mismo nombre, crear el nuevo cliente
      const newMedico = await Medico.create(medicoData);
      newMedico.dataValues.id = newMedico.dataValues.id
      medicos.push(newMedico);


    } catch (error) {
      console.error('Error al crear los medicos:', error.message);
      throw error;
    }
  }

  try {
    await Promise.all(medicosArray.map(crearMedico));
    return medicos;
  } catch (error) {
    throw error;
  }
};
