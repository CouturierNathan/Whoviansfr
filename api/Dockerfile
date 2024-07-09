# Utiliser une image Node.js officielle
FROM node:14

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port sur lequel l'application va écouter
EXPOSE 5000

# Démarrer l'application
CMD ["node", "server.js"]