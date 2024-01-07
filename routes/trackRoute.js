const express = require('express');
const Track = require('../controller/trackController');
const router = express.Router();
router.post('/viewRoutes', Track.getAllRoutes);
module.exports = router;