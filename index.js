
const app = require('./app');
const port = 3700;
app.listen(port, () => {
    console.log("Servidor corriendo correctamente en la url: localhost:", port);
});