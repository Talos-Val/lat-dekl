const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

const server = PeerServer({
  port: port,
  path: '/',
  allow_discovery: false,
});

server.on('connection', (client) => {
  console.log('Client verbunden:', client.getId());
});

server.on('disconnect', (client) => {
  console.log('Client getrennt:', client.getId());
});

console.log(`PeerServer läuft auf Port ${port}`);
