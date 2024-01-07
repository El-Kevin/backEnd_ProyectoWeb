
const User = require ('../models/userModel');
const controller = {
    
    loginUser: async function(req, res) {
      const users = await User.findAll();
      return res.status(200).send({ users });
     }

}
module.exports = controller;