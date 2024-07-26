#!/bin/bash

API_C_IP=$(getent hosts api_c | awk '{ print $1 }')

export REACT_APP_API_URL="http://$API_C_IP:${API_PORT}"

echo "REACT_APP_API_URL=$REACT_APP_API_URL"

exec npm start