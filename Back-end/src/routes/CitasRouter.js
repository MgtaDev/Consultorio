const express = require('express');
const router = express.Router();

// Controllers
const createCita = require('../controllers/Citas/CrearCitas')
const updateCita = require('../controllers/Citas/EditarCitas')
const eliminateCita = require('../controllers/Citas/EliminarCitas')
const getAllCitas = require('../controllers/Citas/GetAllCitas')
const getCitaById = require('../controllers/Citas/GetCitaXid')
const getCitaPorCLienteYMedico = require('../controllers/Citas/GetCitaPorClienteYMedico')
const getCitaPorCliente = require('../controllers/Citas/GetCitaPorCliente')
const getCitaPorMedico = require('../controllers/Citas/GetCitaXMedico')
const putCitaAtendida = require('../controllers/Citas/PutCitaAtendida')
const putCitaCancelada = require('../controllers/Citas/PutCitaCancelada')

// Ruta para crear una cita
  router.post('/', async (req, res) => {
  const { fecha, descripcion, medicoId, clienteId, cliente_name, medico_name, tipo_cita, nombre, apellido, email, numero, cedula_identidad, genero, fecha_nacimiento } = req.body;
    try {
      const nuevaCita = await createCita({clienteId,fecha,descripcion,medicoId,cliente_name, medico_name, tipo_cita, nombre, apellido, email, numero, cedula_identidad, genero, fecha_nacimiento});
      res.status(200).json(nuevaCita);
    } catch (error) {
      console.error('Error al crear una cita nueva', error.message);
      res.status(500).json(error.message);
    }
  });

  // Ruta para editar los datos de la cita
  router.put('/:citaId', async (req, res) => {
    const { citaId } = req.params;
    const { descripcion, estado } = req.body;
    try {
      const updatedCita = await updateCita( citaId,descripcion, estado);
      res.status(200).json(updatedCita);
    } catch (error) {
      console.error('Error al editar la cita', error.message);
      res.status(500).json(error.message);
    }
  });

  // Ruta para eliminar una cita
  router.delete('/:citaId', async (req, res) => {
    const { citaId } = req.params;
    try {
      await eliminateCita(citaId);
      res.status(200).json({mensaje: 'La cita fue elimnada correctamente'});
    } catch (error) {
      console.error('Error al eliminar la cita', error.message);
      res.status(500).json(error.message);
    }
  });

  // Ruta para obtener todas las citas
  router.get('/', async (req, res) => {
    try {
      const allCitas = await getAllCitas();
      res.status(200).json(allCitas);
    } catch (error) {
      console.error('Error al obtener todas las citas:', error.message);
      res.status(500).json({ error: 'Ha ocurrido un error al obtener todas las citas' });
    }
  });

  // Ruta para obtener una cita por ID
  router.get('/:citaId', async (req, res) => {
    const { citaId } = req.params;
    try {
      const cita = await getCitaById(citaId)
      res.status(200).json(cita);
    } catch (error) {
      console.error('Error al actualizar la cita:', error.message);
      res.status(500).json(error.message);
    }
  });

  // Ruta para obtener una cita de un medico y un cliente en especifico
  router.get('/cliente/:clienteId/medico/:medicoId', async (req, res) => {
    const { clienteId, medicoId } = req.params;

    try {
      const citas = await getCitaPorCLienteYMedico(clienteId, medicoId);
      res.status(200).json(citas);
    } catch (error) {
      console.error('Error las cita del medico y el cliente', error.message);
      res.status(500).json(error.message)
    }
  });

  // Ruta para obtener una cita de un cliente en especifico
  router.get('/cliente/:clienteId', async (req, res) => {
    const { clienteId } = req.params;
    try {
      const citas = await getCitaPorCliente(clienteId);
      res.status(200).json(citas);
    } catch (error) {
      console.error('Error al obtener las citas del cliente', error.message);
      res.status(500).json(error.message);
    }
  });

  // Ruta para obtener una cita de un medico en especifico
  router.get('/medico/:medicoId', async (req, res) => {
    const { medicoId } = req.params;
    try {
      const citas = await getCitaPorMedico(medicoId);
      res.status(200).json(citas);
    } catch (error) {
      console.error('Error al obtener las citas del medico', error.message);
      res.status(500).json(error.message);
    }
  });

  // Ruta para colocar una cita de yb cliente y un medico en especifico como atendida
  router.put('/:citaId/cliente/:clienteId/medico/:medicoId/atendida', async (req, res) => {
    const { clienteId, medicoId, citaId } = req.params;
    try {
      const citas = await putCitaAtendida(clienteId, medicoId, citaId)
      res.status(200).json(citas);
    } catch (error) {
      console.error('Error al actualizar el estado de la cita', error.message);
      res.status(500).json(error.message);
    }
  });

  // Ruta para colocar una cita de un cliente y un medico en especifico como cancelada
  router.put('/:citaId/cliente/:clienteId/medico/:medicoId/cancelar', async (req, res) => {
    const { clienteId, medicoId, citaId } = req.params;
    try {
      const cita = await putCitaCancelada(clienteId, medicoId, citaId)
      res.status(200).json(cita);
    } catch (error) {
      console.error('Error al actualizar el estado de la cita:', error.message);
      res.status(500).json(error.message);
    }
  });
  module.exports = router