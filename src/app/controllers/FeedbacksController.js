const FeedbackModel = require("../models/FeedbackModel");

class FeedbacksController {

    async buscaTodos(req, res){
        try{
            const feedbacks = await FeedbackModel.findAll();
            
            res.json({
                msg: 'Todos os feedbacks cadastrados',
                feedbacks: feedbacks
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao listar feedbacks.',
                erro: erro
            });
        }
    }

    async cria(req, res){
        try{
            const feedbackInputDTO = req.body;

            const feedbackNoDb = await FeedbackModel.create(feedbackInputDTO);

            res.json({
                msg: 'Feedback cadastrado com sucesso.',
                feedback: feedbackNoDb
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao cadastrar feedback.',
                erro: erro
            });
        }
    }

    async deleta(req, res) {
        try {
            const feedbackId = req.params.id;
            
            const feedbackNoDb = await FeedbackModel.findOne({
                where: {
                    id: feedbackId
                }
            });

            if (feedbackNoDb == null) {
                res.json({
                    mensagem: 'Feedback inexistente.'
                });
            }
            
            await feedbackNoDb.destroy();

            res.json({
                mensagem: 'Feedback excluído com sucesso.'
            });

        } catch (erro) {
            res.json({
                mensagem: 'Erro ao deletar feedback.'
            })
        }
    }
}

module.exports = new FeedbacksController();