const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'exemplo', // database
  'root', // user
  'root', // password
  {
    dialect: 'mysql', // sqlite
    host: 'localhost', // 127.0.0.1
    port: '3306',
    define: {
      // desabilita colunas createdAt e updatedAt
      timestamps: false
    }
  }
)

const User = sequelize.define('users', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('NOW')
  },
});

const Task = sequelize.define('tasks', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  concluded: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn('NOW')
  },
});

User.hasMany(Task, {
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

Task.belongsTo(User, {
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

module.exports = {
  sequelize,
  User,
  Task
};
