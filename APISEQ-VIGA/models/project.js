const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Project = sequelize.define('project',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true        
    },
    name: Sequelize.STRING
});

module.exports = Project;