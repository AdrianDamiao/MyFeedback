const FeedbackModel = require('../models/FeedbackModel');

const FeedbackRouter = require('express').Router();

FeedbackRouter.post('/feedbacks', (req, res) => 
{
    const FeedbackDto = req.body;

    const Feedback = await FeedbackModel.create(FeedbackDto);

    res.json(Feedback);

});

module.exports = FeedbackRouter;