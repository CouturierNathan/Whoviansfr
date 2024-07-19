#!/bin/bash

API_C_IP=$(getent hosts api_c | awk '{ print $1 }')
SMTP_C_IP=$(getent hosts smtp_c | awk '{ print $1 }')

export REACT_APP_API_URL="http://$API_C_IP:${API_PORT}"
export REACT_APP_SMTP_URL="http://$SMTP_C_IP:3000"

echo "REACT_APP_API_URL=$REACT_APP_API_URL"
echo "REACT_APP_SMTP_URL=$REACT_APP_SMTP_URL"

exec npm start