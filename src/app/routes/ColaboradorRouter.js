const ColaboradorModel = require('../models/ColaboradorModel');

const ColaboradorRouter = require('express').Router();

ColaboradorRouter.post('/colaboradores', (req, res) => 
{
    const colaboradorDto = req.body;

    const colaborador = await ColaboradorModel.create(colaboradorDto);

});

module.exports = ColaboradorRouter;