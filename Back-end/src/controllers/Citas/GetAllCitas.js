const { Cita } = require('../../db');

module.exports = async () => {
    try {
     const citas = Cita.findAll()
      return citas
    } catch (error) {
      console.log('Ha ocurrido un error al obtener las citas');
      throw error;
    }
  };



