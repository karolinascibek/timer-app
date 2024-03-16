#!/bin/bash
cd ../timer-app
CLIENT_URL='localhost';
CLIENT_PORT=4200;
echo "$CLIENT_URL $CLIENT_PORT";
start chrome "http://$CLIENT_URL:$CLIENT_PORT";
npm run start

