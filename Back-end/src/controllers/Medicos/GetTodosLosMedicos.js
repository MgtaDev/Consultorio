const { Medico } = require('../../db');

module.exports = async () => {
  try {
    const allMedicos = await Medico.findAll();
    return allMedicos;
  } catch (error) {
    console.error('Error al obtener todos los medicos:', error.message);
    throw error;
  }
};
