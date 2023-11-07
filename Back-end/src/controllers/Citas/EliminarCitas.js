const { Cita } = require('../../db');

module.exports = async (citaId) => {
  try {
    // Buscar el cliente por su ID
    const cita = await Cita.findByPk(citaId);
        // Si no se encuentra el cliente, lanzar un error
        if (!cita) {
          const error = new Error('La cita no existe.');
          error.status = 404;
          throw error;
        }
    
    await cita.destroy();

  } catch (error) {
    console.error('Error al eliminar la cita', error.message);
    throw error;
  }
};