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
    defaultValue: DataTypes.NOW,
  }
});

module.exports = {
  sequelize,
  User
};
