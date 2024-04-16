const express = require('express');

const { User } = require('../models');

const router = express.Router();

// localhost:3000/users/
router.get('/', async function (request, response, next) {
  try {
    const users = await User.findAll();
    response.status(200).json(users);
  } catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
});

// localhost:3000/users/1
router.get('/:userId', async function (request, response, next) {
  try {
    const user = await User.findByPk(request.params.userId);
    if (!user) {
      response.status(404).send('Usuário não encontrado.');
      return;
    }
    response.status(200).json(user);
  } catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
});

module.exports = router;
