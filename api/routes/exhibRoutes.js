const express = require('express');
const router = express.Router();
const exhibController = require('../controllers/exhibController');

router.get('/exhib', exhibController.getAllExhib);
router.post('/exhib', exhibController.addExhib);

// Autres routes pour créer, mettre à jour, supprimer des exposants...
module.exports = router;
