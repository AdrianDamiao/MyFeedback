const ColaboradoresController = require('../controllers/ColaboradoresController');

const ColaboradoresRouter = require('express').Router();

ColaboradoresRouter.get('/colaboradores', ColaboradoresController.buscaTodos);
ColaboradoresRouter.post('/colaboradores', ColaboradoresController.cria);
ColaboradoresRouter.put('/colaboradores/:id', ColaboradoresController.atualiza);
ColaboradoresRouter.delete('/colaboradores/:id', ColaboradoresController.deleta);

module.exports = ColaboradoresRouter;