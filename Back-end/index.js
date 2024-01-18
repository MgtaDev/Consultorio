
const server = require('./src/app');
const { conn } = require('./src/db');
const { PORT, DB_Name } = process.env;

// Clientes
const cargarClientes = require('./src/controllers/Clientes/CargarAllClientes')
const clientesJson = require('./json/cliente.json')

// Medicos
const cargarMedicos = require('./src/controllers/Medicos/CargarAllMedicos')
const medicosJson = require('./json/medicos.json')

//Administradores
const cargarAdmins = require('./src/controllers/Admins/cargarAllAdmins')
const adminsJson = require('./json/admins.json')

async function loadData (){
await cargarClientes(clientesJson)
console.log('Clientes sincronizados')

await cargarMedicos(medicosJson)
console.log('Medicos sincronizados')

await cargarAdmins(adminsJson)
console.log('Admministradores sincronizados')
}

async function startServer() {
  try {
    // Sincronizamos la base de datos y forzamos la creación de tablas
    await conn.sync({ force: true });
    console.log(`Base de datos sincronizada. Conectado a ${DB_Name}`);

    // Cargamos los json
    await loadData()

    // Iniciamos el servidor para escuchar en el puerto
    server.listen(PORT, () => {
      console.log('Server listening on port', PORT);
    });

  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
