const Sequelize = require('sequelize');
const AreaModel = require('../app/models/AreaModel');
const ColaboradorModel = require('../app/models/ColaboradorModel');
const EmpresaModel = require('../app/models/EmpresaModel');
const FeedbackModel = require('../app/models/FeedbackModel');
const FuncaoModel = require('../app/models/FuncaoModel');
const SessaoModel = require('../app/models/SessaoModel');
const databaseConfig = require('./config/DatabaseConfig');

const connection = new Sequelize(databaseConfig);

AreaModel.init(connection);
ColaboradorModel.init(connection);
EmpresaModel.init(connection);
FeedbackModel.init(connection);
FuncaoModel.init(connection);
SessaoModel.init(connection);


AreaModel.associate(connection.models);
ColaboradorModel.associate(connection.models);
FeedbackModel.associate(connection.models);
SessaoModel.associate(connection.models);

module.exports = connection;