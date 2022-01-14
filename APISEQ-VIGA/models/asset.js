const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Asset = sequelize.define('asset',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true        
    },
    name: Sequelize.STRING
});

module.exports = Asset;