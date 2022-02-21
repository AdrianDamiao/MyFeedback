const FuncaoModel = require('../models/FuncaoModel');

const FuncaoRouter = require('express').Router();

FuncaoRouter.post('/funcoes', (req, res) => 
{
    const FuncaoDto = req.body;

    const Funcao = await FuncaoModel.create(FuncaoDto);

    res.json(Funcao);

});

module.exports = FuncaoRouter;