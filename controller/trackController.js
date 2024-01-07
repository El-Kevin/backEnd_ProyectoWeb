const Track = require ('../models/trackModel');
const controller = {
    getAllRoutes: async (req, res) => {
        try {
            const routes = await Track.findAll();
            res.status(200).json(routes);
        } catch (error) {
            console.error('Error al obtener las rutas:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
  

}

module.exports = controller;