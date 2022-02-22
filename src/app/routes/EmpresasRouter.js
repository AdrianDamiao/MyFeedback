const EmpresasController = require('../controllers/EmpresasController');

const EmpresasRouter = require('express').Router();

EmpresasRouter.post('/empresas', EmpresasController.cria);
EmpresasRouter.get('/empresas', EmpresasController.buscaTodos);
EmpresasRouter.put('/empresas/:id', EmpresasController.atualiza);
EmpresasRouter.delete('/empresas/:id', EmpresasController.deleta);

module.exports = EmpresasRouter;