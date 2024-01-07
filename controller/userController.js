
//const User = require ('../models/userModel');
const controller = {
    
    loginUser: async function(req, res) {
        return res.status(200).send({msg: "valio"})
     }

}
module.exports = controller;