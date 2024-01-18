const express = require('express');
const router = express.Router();

const loadAllAdmins = require('../controllers/Admins/cargarAllAdmins'); // 
const postAdmin = require('../controllers/Admins/crearAdmin')

// Ruta para cargar todos los administradores y crear administradores desde nuestro admin panel
router.post('/', async (req, res) => {
    try {
      
      if (Array.isArray(req.body)) {
        const admins = await loadAllAdmins(req.body);
        res.status(200).json(admins);
      } else {
        const admin = await postAdmin(req.body);
        res.status(200).json(admin);
      }
    } catch (error) {
      console.error('Error al agregar el o los administradores:', error.message);
      res.status(500).json({ error: 'Ha ocurrido un error al agregar el o los adminstradores.' });
    }
  });

module.exports = router