const AreasController = require('../controllers/AreasController');

const AreasRouter = require('express').Router();

AreasRouter.get('/areas', AreasController.buscaTodos);
AreasRouter.post('/areas', AreasController.cria);
AreasRouter.put('/areas/:id', AreasController.atualiza);
AreasRouter.delete('/areas/:id', AreasController.deleta);

module.exports = AreasRouter;