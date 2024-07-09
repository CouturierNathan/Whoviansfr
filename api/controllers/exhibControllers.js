const Exhib = require('../models/exhibModel');

exports.getAllExhibs = (req, res) => {
    Exhib.getAll((err, exhibs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(exhibs);
    }
  });
};

exports.addExhib = (req, res) => {
  const newExhib = req.body;
  
  // Valider les données de l'utilisateur ici
  if (!newExhib.name || !newExhib.email) {
    return res.status(400).send({ error: true, message: 'Please provide name and email' });
  }

  Exhib.add(newExhib, (err, exhibId) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ id: exhibId, ...newExhib });
    }
  });
};

// Autres fonctions pour créer, mettre à jour, supprimer des exposants...