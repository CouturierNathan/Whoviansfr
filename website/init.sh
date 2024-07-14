#!/bin/bash

# Récupérer l'adresse IP du conteneur `api_c`
API_C_IP=$(getent hosts api_c | awk '{ print $1 }')

# Configurer la variable d'environnement REACT_APP_API_URL
export REACT_APP_API_URL="http://$API_C_IP:${API_PORT}"

# Exécuter la commande par défaut (par exemple, démarrer votre serveur web)
exec "$@"