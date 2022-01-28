const Sequelize = require('sequelize');
const databaseConfig = require('./config/DatabaseConfig');

const connection = new Sequelize(databaseConfig);

module.exports = connection;