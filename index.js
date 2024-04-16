const { readFileSync } = require('fs');
const http = require('http');
const ws = require('ws');
const server = new http.Server;
const wsServer = new ws.Server({ noServer: true });
const port = 3000;

server.listen(port);

server.on('request', handleRequest)

server.on('upgrade', handleUpgrade)

function handleRequest(request, response) {
  try {
    const filePath = request.url.slice(1) || 'index.html';
    const fileContent = readFileSync(filePath);
    response.end(fileContent);

  } catch (error) {
    response.statusCode = 404
    response.end('File not found')
  }
}

function handleUpgrade(...args) {
  wsServer.handleUpgrade(...args, handleConnection);
}

function handleConnection(ws) {
  ws.on('message', handleMessage(ws));
}

function handleMessage(ws) {
  return (msg) => {
    console.log(msg.toString());
    setTimeout(() => ws.send('pong'), 1000);
  }
}