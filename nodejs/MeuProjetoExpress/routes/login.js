const express = require('express');
const jwt = require('jsonwebtoken');

const jwtPassword = 'minha-senha-super-segura';
const router = express.Router();

// localhost:3000/login
router.get('/', function(request, response) {
  const payload = {
    name: 'Douglas Junior',
    type: 'admin'
  };
  const token = jwt.sign(payload, jwtPassword, {
    expiresIn: '7d'
  });

  response.status(200).send(token);
});

// localhost:3000/login/verify
router.get('/verify', function(request, response) {
  try {
    const token = request.headers.token;
    const payload = jwt.verify(token, jwtPassword);
    response.status(200).json(payload);
  } catch (err) {
    console.warn(err);
    response.status(401).send('Token inválido.');
  }
});

module.exports = router;
