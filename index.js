const { ConnectionPool } = require('mssql');
const app = require('./app');
const port = 3700;

const config = {
  user: 'sa',
  password: 'Lluvia27@',
  server: 'localhost',
  database: 'BDD_PASANTIAS',
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
    app.listen(port, () => {
      console.log('Servidor corriendo correctamente en la url: localhost:', port);
    });
  })
  .catch((err) => {
    console.error('Error de conexión:', err);
  });
