const FuncoesController = require('../controllers/FuncoesController');


const FuncoesRouter = require('express').Router();

FuncoesRouter.get('/funcoes', FuncoesController.buscaTodos);
FuncoesRouter.post('/funcoes', FuncoesController.cria);
FuncoesRouter.put('/funcoes/:id', FuncoesController.atualiza);
FuncoesRouter.delete('/funcoes/:id', FuncoesController.deleta);

module.exports = FuncoesRouter;