const EmpresaModel = require('../models/EmpresaModel');

const EmpresaRouter = require('express').Router();

EmpresaRouter.post('/empresas', (req, res) => 
{
    const EmpresaDto = req.body;

    const Empresa = await EmpresaModel.create(EmpresaDto);

    res.json(Empresa);

});

module.exports = EmpresaRouter;