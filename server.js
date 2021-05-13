const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('open', function open() {
  console.log('connected');
});

server.on('close', function close() {
  console.log('disconnected');
});

server.on('connection', function connection(ws, req) {
  const ip = req.remoteAddress;
  const port = req.remotePort;
  const clientName = ip + port;

  console.log('%s is connected', clientName)

  ws.send("Welcome " + clientName);

  ws.on('message', function incoming(message) {    
    console.log('received: %s from %s', message, clientName);
    if( message == "發送"){
        server.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send( clientName + " -> " + message);
            }
        });
    }
    
  });
});