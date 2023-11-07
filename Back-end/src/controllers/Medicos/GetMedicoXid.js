const { Medico } = require('../../db');

module.exports = async (medicoId) => {
  try {

    function extractNumberFromString(inputString) {
      const match = inputString.match(/\d+/); // Busca uno o más dígitos en la cadena
      if (match) {
        return parseInt(match[0]); // Convierte el valor coincidente en un número entero
      }    
      return null; // Si no se encuentra un número, devuelve null o algún valor predeterminado
    }

    medicoId = extractNumberFromString(medicoId)

    const medico = await Medico.findByPk(medicoId);

    if (!medico) {
      const error = new Error('medico no encontrado.');
      error.status = 404;
      throw error;
    }

    medico.dataValues.id = `medico-${medico.dataValues.id}`;

    return medico;
  } catch (error) {
    console.error('Error al obtener el medico', error.message);
    throw error;
  }
};
