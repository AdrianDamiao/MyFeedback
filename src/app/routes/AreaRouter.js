const AreaModel = require('../models/AreaModel');

const AreaRouter = require('express').Router();

AreaRouter.post('/areas', (req, res) => 
{
    const areaDto = req.body;

    const area = await AreaModel.create(areaDto);

    res.json(area);

});

module.exports = AreaRouter;