FROM node:20.15.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# Démarrer l'application
CMD ["node", "server.js"]