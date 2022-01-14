const Sequelize = require('sequelize');


const sequelize = new Sequelize('viga', 'root', 'Anurag!23', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
