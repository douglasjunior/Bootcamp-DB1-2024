const express = require('express');
const { Op, Sequelize } = require('sequelize');

const { User, Task, sequelize } = require('../models');

const router = express.Router();

// GET localhost:3000/users/
router.get('/', async function (request, response) {
  try {
    const { name } = request.query;
    const where = {};
    if (name) {
      where.name = {
        [Op.like]: `%${name}%`
      };
    }
    const users = await User.findAll({
      where,
      // attributes: ['id', 'name', 'age']
      include: [{
        model: Task,
        required: false, // left join
      }]
    });
    response.status(200).json(users);
  } catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
});

// GET localhost:3000/users/count
router.get('/count', async (request, response) => {
  try {
    const users = await User.findAll({
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('id')), 'counter']
      ]
    });
    response.status(200).json(users);
  } catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
});

// GET localhost:3000/users/paginate?limit=20&offset=40
router.get('/paginate', async (request, response) => {
  try {
    const limit = Number(request.query.limit); // NaN
    const offset = Number(request.query.offset);
    const users = await User.findAndCountAll({
      limit: Number.isFinite(limit) ? limit : undefined,
      offset: Number.isFinite(offset) ? offset : undefined,
    })
    response.status(200).json(users);
  } catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
})

// GET localhost:3000/users/1
router.get('/:userId', async function (request, response) {
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

// POST localhost:3000/users
// {
//   "name": "Douglas Junior",
//   "age": 34
// }
router.post('/', async (request, response) => {
  try {
    const body = request.body;

    const user = await sequelize.transaction(async (transaction) => {
      let user = await User.create(body, {
        transaction
      });
      user = await User.findByPk(user.id, {
        transaction
      });
      await Task.create({
        title: 'Terminar o Bootcamp',
        userId: user.id
      }, {
        transaction
      })
      return user;
    });

    response.status(201).json(user);
  } catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
});

// PATCH localhost:3000/users/123
// {
//   "name": "Douglas Junior",
//   "age": 34
// }
router.patch('/:userId', async (request, response) => {
  try {
    const user = await User.findByPk(request.params.userId);
    if (!user) {
      response.status(404).send('Usuário não encontrado.');
      return;
    }
    await user.update(request.body);
    response.status(200).json(user);
  } catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
});

// PATCH localhost:3000/users/123
// {
//   "name": "Douglas Junior",
//   "age": 34
// }
// router.patch('/:userId', async (request, response) => {
//   try {
//     const [affectedRows] = await User.update(request.body, {
//       where: {
//         id: request.params.userId
//       }
//     });
//     const user = await User.findByPk(request.params.userId);
//     if (!user) {
//       response.status(404).send('Usuário não encontrado.');
//       return;
//     }
//     response.status(200).json(user);
//   } catch (err) {
//     console.log(err);
//     response.status(400).send('Falha ao consultar os usuários')
//   }
// });

// DELETE localhost:3000/users/123
router.delete('/:userId', async (request, response) => {
  try {
    const deletedRows = await User.destroy({
      where: {
        id: request.params.userId
      }
    });
    if (!deletedRows) {
      response.status(404).send('Usuário não encontrado.');
      return;
    }
    response.status(204).send();
  } catch (err) {
    console.log(err);
    response.status(400).send('Falha ao consultar os usuários')
  }
});

module.exports = router;
