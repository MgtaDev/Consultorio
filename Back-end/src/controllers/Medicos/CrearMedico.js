const { Medico } = require('../../db');

module.exports = async (medicoData) => {
  try {
    // Verificar si ya existe un cliente con el mismo nombre
    const existingcliente = await Medico.findOne({
      where: {
        name: medicoData.name,
      },
    });

    if (existingcliente) {
      // Si ya existe un cliente con el mismo nombre, lanzar un error
      const error = new Error('Ya existe un medico con este nombre.');
      error.status = 400;
      throw error;
    }

    // Si no existe un cliente con el mismo nombre, crear el nuevo cliente
    const newMedico = await Medico.create(medicoData);



    newMedico.dataValues.id = `medico-${newMedico.dataValues.id}`;

    return newMedico
  } catch (error) {
    console.error('Error al agregar el medico', error);
    throw error;
  }
};
