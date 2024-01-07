const User = require ('../models/userModel');
const controller = {
    newRoute: async function(req, res) {
        try {
          const { id_user, name_route, begin_route, end_route } = req.body;
          
          // Crear la nueva ruta
          const newRoute = await Route.create({
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
  

}

module.exports = controller;