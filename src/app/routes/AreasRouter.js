const AreasController = require('../controllers/AreasController');

const AreasRouter = require('express').Router();

AreasRouter.post('/areas', AreasController.create);

module.exports = AreasRouter;