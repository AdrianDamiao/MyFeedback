const SessoesController = require('../controllers/SessoesController');

const SessoesRouter = require('express').Router();

SessoesRouter.get('/sessoes', SessoesController.buscaTodos);
SessoesRouter.post('/sessoes', SessoesController.cria);
SessoesRouter.put('/sessoes/:id', SessoesController.atualiza);
SessoesRouter.delete('/sessoes/:id', SessoesController.deleta);

module.exports = SessoesRouter;