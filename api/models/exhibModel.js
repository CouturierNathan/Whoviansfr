const db = require('../config/db');

const Exhib = {};

Exhib.getAll = (result) => {
  db.query('SELECT * FROM exhib', (err, res) => {
    if (err) {
      console.log('Error fetching exhibs:', err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Exhib.add = (newExhib, result) => {
  db.query('INSERT INTO exhibs SET ?', newExhib, (err, res) => {
    if (err) {
      console.log('Error adding exhib:', err);
      result(err, null);
      return;
    }
    result(null, res.insertId);
  });
};

// Autres fonctions pour interagir avec la base de données...
module.exports = Exhib;
