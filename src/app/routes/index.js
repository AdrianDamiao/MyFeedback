const app = require('../../app');
const AreasRouter = require('./AreasRouter');
const ColaboradoresRouter = require('./ColaboradoresRouter');
const EmpresasRouter = require('./EmpresasRouter');
const FeedbacksRouter = require('./FeedbacksRouter');
const FuncoesRouter = require('./FuncoesRouter');
const SessoesRouter = require('./SessoesRouter');

module.exports = (app) => {
    app.use(AreasRouter);
    app.use(ColaboradoresRouter);
    app.use(EmpresasRouter);
    app.use(FeedbacksRouter);
    app.use(FuncoesRouter);
    app.use(SessoesRouter);
}