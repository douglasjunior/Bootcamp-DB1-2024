const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html; charset=utf-8');
  response.writeHead(201);
  response.write('Olá HTTP!');
  response.end();
});

server.listen(3000, () => {
  console.log('Servidor iniciado na porta:', port);
});
