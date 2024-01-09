const { ConnectionPool } = require('mssql');
const {app, server} = require('./app');
const port = 3700;

const config = {
  user: 'usr_usuario',
  password: 'usr_usuario',
  server: 'localhost',
  database: 'BDD_Proyecto',
  options: {
    //encrypt: true, // Dependiendo de tu configuración de SQL Server
    encrypt: true,
    trustServerCertificate: true,
  },
};


const pool = new ConnectionPool(config);

pool.connect()
  .then(() => {
    console.log('Conexión exitosa a SQL Server');
    server.listen(port, () => {
      console.log('Servidor corriendo correctamente en la url: localhost:', port);
    });
  })
  .catch((err) => {
    console.error('Error de conexión:', err);
  });
