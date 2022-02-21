const app = require('../../app');
const AreaRouter = require('./AreaRouter');
const ColaboradorRouter = require('./ColaboradorRouter');
const EmpresaRouter = require('./EmpresaRouter');
const FeedbackRouter = require('./Feedback');
const FuncaoRouter = require('./FuncaoRouter');
const SessaoRouter = require('./SessaoRouter');

module.exports = (app) => {
    app.use(AreaRouter);
    app.use(ColaboradorRouter);
    app.use(EmpresaRouter);
    app.use(FeedbackRouter);
    app.use(FuncaoRouter);
    app.use(SessaoRouter);
}