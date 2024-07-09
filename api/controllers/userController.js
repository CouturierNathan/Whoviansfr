const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(users);
    }
  });
};

exports.addUser = (req, res) => {
  const newUser = req.body;
  
  // Valider les données de l'utilisateur ici
  if (!newUser.name || !newUser.email) {
    return res.status(400).send({ error: true, message: 'Please provide name and email' });
  }

  User.add(newUser, (err, userId) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ id: userId, ...newUser });
    }
  });
};

// Autres fonctions pour créer, mettre à jour, supprimer des utilisateurs...