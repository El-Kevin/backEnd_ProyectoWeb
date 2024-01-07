const Track = require ('../models/trackModel');
const controller = {
    getAllRoutes: async (req, res) => {
        try {
            const routes = await Track.findAll();
            res.status(200).send({ routes: routes });
        } catch (error) {
            console.error('Error al obtener las rutas:', error);
            res.status(500).send({ error: 'Error interno del servidor' });
        }
    },

    deleteRoute: async (req, res) => {
        const routeId = req.params.id;

        try {
            const deletedRoute = await Track.destroy({
                where: { ID_ROUTE: routeId }
            });

            if (deletedRoute === 1) {
                res.status(200).send({ message: 'Ruta eliminada exitosamente' });
            } else {
                res.status(404).send({ error: 'Ruta no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la ruta:', error);
            res.status(500).send({ error: 'Error interno del servidor' });
        }
    }
  

}

module.exports = controller;