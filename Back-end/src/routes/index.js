const { Router } = require('express');
const router = Router();

// Routers
const ClientesRouter = require('../routes/ClientesRouter')
const CitasRouter = require('../routes/CitasRouter')
const MedicosRouter = require('../routes/MedicosRouter')

router.use('/cliente',ClientesRouter)
router.use('/cita',CitasRouter)
router.use('/medico',MedicosRouter)


module.exports = router;

