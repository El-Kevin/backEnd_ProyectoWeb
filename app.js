const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete CORS
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const connectedUser = new Set();
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado', socket.id);
  io.emit('connected-user', connectedUser.size);
  connectedUser.add(socket.id);

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado', socket.id);
    connectedUser.delete(socket.id);
    io.emit('connected-user', connectedUser.size);
  });

  socket.on('message', (data)=> {
    console.log(data);
    socket.broadcast.emit('message-receive', data);
  });

  
});


//rutas

const userRoutes = require('./routes/userRoute');
const trackRoutes = require('./routes/trackRoute');

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar cabeceras y cors


  app.use(cors({
    origin: '*', // Permitir acceso desde cualquier origen

    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization', 'X-API-KEY', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Access-Control-Allow-Request-Method'],
  }));

  app.use('/api', userRoutes);
  app.use('/routes', trackRoutes);

//Exportar
  module.exports = {app, server};