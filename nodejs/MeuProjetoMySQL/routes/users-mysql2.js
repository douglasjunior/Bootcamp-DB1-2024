const express = require('express');
const mysql = require('mysql2');

const router = express.Router();

const connection = mysql.createConnection({
  database: 'exemplo',
  host: 'localhost', // 127.0.0.1
  user: 'root',
  password: 'root'
});

// localhost:3000/users/
router.get('/', function (request, response, next) {
  connection.query(
    'SELECT * FROM users',
    (error, result, field) => {
      if (error) {
        console.log(error);
        response.status(400).send('Erro ao se conectar ao banco de dados.');
        return;
      }

      response.status(200).json(result);
    },
  );
});

// localhost:3000/users/1
router.get('/:userId', function (request, response, next) {
  connection.query(
    'SELECT * FROM users u WHERE u.id = ?',
    [request.params.userId],
    (error, result, field) => {
      if (error) {
        console.log(error);
        response.status(400).send('Erro ao se conectar ao banco de dados.');
        return;
      }

      if (!result.length) {
        response.status(404).send('Usuário não encontrado.');
        return;
      }

      response.status(200).json(result[0]);
    },
  );
});

module.exports = router;
