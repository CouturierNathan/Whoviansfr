const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.addUser);

// Autres routes pour créer, mettre à jour, supprimer des utilisateurs...
module.exports = router;
