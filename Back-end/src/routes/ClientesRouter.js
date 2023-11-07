const express = require('express');
const router = express.Router();

const getAllClients = require('../controllers/Clientes/GetTodosLosClientes'); // √
const getClientePerId = require('../controllers/Clientes/GetClienteXid'); // √
const postClient = require('../controllers/Clientes/CrearCliente');
const postArrayClients = require('../controllers/Clientes/CargarAllClientes');
const putClientProps = require('../controllers/Clientes/EditarCliente')
const deleteClient = require('../controllers/Clientes/EliminarCliente')
const putClientActive = require('../controllers/Clientes/PutClienteActivo')

// Ruta para obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await getAllClients();
    res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al obtener los clientes:', error.message);
    res.status(500).json({ error: 'Ha ocurrido un error al obtener los clientes.' });
  }
});

// Ruta para obtener un cliente por su ID
router.get('/:clientesId', async (req, res) => {
  const { clientesId } = req.params;
  try {
    const cliente = await getClientePerId(clientesId);
    res.status(200).json(cliente);
  } catch (error) {
    console.error('Error al obtener el cliente:', error.message);
    res.status(500).json({ error: 'Ha ocurrido un error al obtener el cliente.' });
  }
});

// Ruta para agregar un cliente
router.post('/', async (req, res) => {
  try {
    
    if (Array.isArray(req.body)) {
      const clientes = await postArrayClients(req.body);
      res.status(200).json(clientes);
    } else {
      const cliente = await postClient(req.body);
      res.status(200).json(cliente);
    }
  } catch (error) {
    console.error('Error al agregar el cliente:', error.message);
    res.status(500).json({ error: 'Ha ocurrido un error al agregar el cliente.' });
  }
});

// Ruta para editar propiedades del cliente
router.put('/:clientesId', async (req, res) => {
  const { clientesId } = req.params;
  
  try {
    const cliente = await putClientProps(clientesId, req.body);

    res.status(200).json(cliente);
  } catch (error) {
    console.error('Error al actualizar el cliente:', error.message);
    res.status(500).json({ error: 'Ha ocurrido un error al actualizar el cliente.' });
  }
});

// Ruta para activar un cliente
router.put('/activate/:clientesId', async (req, res) => {
  const { clientesId } = req.params;
  try {
    const cliente = await putClientActive(clientesId); // Usar el controlador para cambiar activa a true
    res.status(200).json(cliente);
  } catch (error) {
    console.error('Error al cambiar el estado del cliente:', error.message);
    res.status(500).json({ error: 'Ha ocurrido un error al cambiar el estado del cliente.' });
  }
});

// Ruta para eliminar logicamente un cliente
router.put('/delete/:clientesId', async (req, res) => {
  const { clientesId } = req.params;

  try {
    const cliente = await deleteClient(clientesId);
    res.status(200).json(cliente);
  } catch (error) {
    console.error('Error al eliminar el cliente:', error.message);
    res.status(500).json({ error: 'Ha ocurrido un error al eliminar el cliente.' });
  }
});

module.exports = router;
