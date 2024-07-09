const db = require('../config/db');

const User = {};

User.getAll = (result) => {
  db.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log('Error fetching users:', err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

User.add = (newUser, result) => {
  db.query('INSERT INTO users SET ?', newUser, (err, res) => {
    if (err) {
      console.log('Error adding user:', err);
      result(err, null);
      return;
    }
    result(null, res.insertId);
  });
};

// Autres fonctions pour interagir avec la base de données...
module.exports = User;
