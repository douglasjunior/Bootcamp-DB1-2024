const express = require('express');

const port = 3000;

const server = express();

// body-parser
server.use(express.json());

server.use((request, response, next) => {
  const token = request.headers.token;

  if (token === 'meu-token') {
    next();
  } else {
    response.status(403)
      .send('Usuário não autenticado.');
  }
});

// http://localhost:3000
server.get('/', (request, response) => {
  response
    .setHeader('content-type', 'text/html; charset=utf-8')
    .status(200)
    .send('<html><body>Olá <strong>Node JS</strong>!</body></html>');
});

// http://localhost:3000/help
server.get('/help', (request, response) => {
  response
    .setHeader('content-type', 'text/html; charset=utf-8')
    .status(200)
    .send('<html><body>Help page!</body></html>');
});

http://localhost:3000/users/123
server.get('/users/:userId/:groupId', (request, response) => {
  const userId = request.params.userId;
  const groupId = request.params.groupId;

  response
    .setHeader('content-type', 'text/html; charset=utf-8')
    .status(200)
    .send('<html><body>User: ' + userId + '/' + groupId + '</body></html>');
});

server.post('/users', (request, response) => {
  const body = request.body;
  console.log(body.name);
  console.log(body.age);

  response.status(201).send();
});

server.listen(port, () => {
  console.log('Servidor iniciado na porta:', port);
});
