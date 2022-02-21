const SessaoModel = require('../models/SessaoModel');

const SessaoRouter = require('express').Router();

SessaoRouter.post('/sessoes', (req, res) => 
{
    const SessaoDto = req.body;

    const Sessao = await SessaoModel.create(SessaoDto);

    res.json(Sessao);

});

module.exports = SessaoRouter;