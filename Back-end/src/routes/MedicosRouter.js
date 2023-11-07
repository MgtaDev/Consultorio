const express = require('express');
const router = express.Router();

// Controllers
const getAllMedicos = require('../controllers/Medicos/GetTodosLosMedicos')
const getMedicoPerId = require('../controllers/Medicos/GetMedicoXid')
const postMedicosArray = require('../controllers/Medicos/CargarAllMedicos')
const postMedico = require('../controllers/Medicos/CrearMedico')
const putMedicoProps = require('../controllers/Medicos/EditarMedico')
const deleteMedico = require('../controllers/Medicos/EliminarMedico')
const agregarMedico = require('../controllers/Medicos/PutMedicoActivo');

// Rutas
router.get('/', async (req, res) => {
    try {
      const medicos = await getAllMedicos();
      res.status(200).json(medicos);
    } catch (error) {
      console.error('Error al obtener los medicos:', error.message);
      res.status(500).json(error.message);
    }
  });

  router.get('/:medicoId', async (req, res) => {
    const { medicoId } = req.params;
    try {
      const medico = await getMedicoPerId(medicoId);
      res.status(200).json(medico);
    } catch (error) {
      console.error('Error al obtener el medico:', error.message);
      res.status(500).json(error.message);
    }
  });

  router.post('/', async (req, res) => {
    try {
      
      if (Array.isArray(req.body)) {
        const medicos = await postMedicosArray(req.body);
        res.status(200).json(medicos);
      } else {
        const medico = await postMedico(req.body);
        res.status(200).json(medico);
      }
    } catch (error) {
      console.error('Error al agregar el medico:', error.message);
      res.status(500).json({ error: 'Ha ocurrido un error al agregar el medico.' });
    }
  });

  router.put('/:medicoId', async (req, res) => {
    const { medicoId } = req.params;
    try {
      const medico = await putMedicoProps(medicoId, req.body);
  
      res.status(200).json(medico);
    } catch (error) {
      console.error('Error al actualizar el medico:', error.message);
      res.status(500).json({ error: 'Ha ocurrido un error al actualizar el medico.' });
    }
  });

  router.put('/activate/:medicoId', async (req, res) => {
    const { medicoId } = req.params;
    try {
      const medico = await agregarMedico(medicoId); // Usar el controlador para cambiar activa a true
      res.status(200).json(medico);
    } catch (error) {
      console.error('Error al cambiar el estado del medico:', error.message);
      res.status(500).json({ error: 'Ha ocurrido un error al cambiar el estado del medico.' });
    }
  });
  
  // Ruta para eliminar logicamente un cliente
  router.put('/delete/:medicoId', async (req, res) => {
    const { medicoId } = req.params;
  
    try {
      const medico = await deleteMedico(medicoId);
      res.status(200).json(medico);
    } catch (error) {
      console.error('Error al eliminar el medico:', error.message);
      res.status(500).json(error.message);
    }
  });
  
  module.exports = router