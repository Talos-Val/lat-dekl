const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const port = process.env.PORT || 9000;

// Health check endpoint for UptimeRobot
app.get('/', (req, res) => res.send('OK'));

const server = app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

const peerServer = ExpressPeerServer(server, {
  path: '/',
  key: 'peerjs',
  allow_discovery: false,
});

app.use('/peerjs', peerServer);

peerServer.on('connection', (client) => {
  console.log('Client verbunden:', client.getId());
});

peerServer.on('disconnect', (client) => {
  console.log('Client getrennt:', client.getId());
});
