const FeedbacksController = require('../controllers/FeedbacksController');

const FeedbacksRouter = require('express').Router();

FeedbacksRouter.get('/feedbacks', FeedbacksController.buscaTodos);
FeedbacksRouter.post('/feedbacks', FeedbacksController.cria);
FeedbacksRouter.delete('/feedbacks/:id', FeedbacksController.deleta);

module.exports = FeedbacksRouter;