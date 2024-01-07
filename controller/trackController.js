const Track = require ('../models/trackModel');

const controller = {

    newRoute: async function(req, res) {
        try {
          const { id_user, name_route, begin_route, end_route } = req.body;
          
          // Crear la nueva ruta
          const newRoute = await Track.create({
            ID_USER: id_user,
            NAME_ROUTE: name_route,
            BEGIN_ROUTE: begin_route,
            END_ROUTE: end_route
          });
          
          // Enviar respuesta con la ruta creada
          return res.status(200).send({
            message: 'Ruta creada exitosamente',
            route: newRoute // Aquí se muestra la ruta creada
          });
        } catch (error) {
          // Manejo de errores
          console.error("Error al crear la ruta:", error);
          return res.status(500).send({ error: 'Error al crear la ruta' });
        }
      },

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