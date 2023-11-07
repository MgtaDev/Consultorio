const { Cita } = require('../../db');

module.exports = async (citaId) => {
    try {
      const cita = Cita.findByPk(citaId)
         
    return cita

    } catch (error) {
      console.log('No existe una cita con este id');
      throw error;
    }
  };



