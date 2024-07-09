const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const exhibRoutes = require('./routes/exhibRoutes');
require('dotenv').config();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Définir les routes
app.use('/api', userRoutes);
app.use('/api', exhibRoutes);

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
