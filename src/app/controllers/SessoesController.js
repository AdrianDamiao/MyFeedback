const SessaoModel = require("../models/SessaoModel");

class SessoesController {
    async buscaTodos(req, res){
        try{
            const sessoes = await SessaoModel.findAll();
            
            res.json({
                msg: 'Todas as sessões cadastradas',
                sessoes: sessoes
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao listar sessões.',
                erro: erro
            });
        }
    }

    async cria(req, res){
        try{
            const sessaoInputDTO = req.body;
            const sessaoNoDb = await SessaoModel.create(sessaoInputDTO);

            res.json({
                msg: 'Sessão criada com sucesso.',
                sessao: sessaoNoDb
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao criar sessão.',
                erro: erro
            });
        }
    }

    async atualiza(req, res) {
        try {
            const sessaoInputDTO = req.body;

            const sessaoNoDb = await SessaoModel.findOne({
                where: {
                    id: req.params.id
                } 
            })

            if (sessaoNoDb == null) {
                res.json({
                    mensagem: 'Sessão inexistente.',
                    status: '404'
                });
            }

            sessaoNoDb.set(sessaoInputDTO);
            await sessaoNoDb.save();

            res.json({
                    mensagem: 'Sessão atualizada com sucesso.'
                });
        } catch (erro) {
            res.json({
                mensagem: 'Erro ao atualizar sessão.'
            });
        }
    }

    async deleta(req, res) {
        try {
            const sessaoId = req.params.id;
            
            const sessaoNoDb = await SessaoModel.findOne({
                where: {
                    id: sessaoId
                }
            });

            if (sessaoNoDb == null) {
                res.json({
                    mensagem: 'Sessão inexistente.'
                });
            }
            
            await sessaoNoDb.destroy();

            res.json({
                mensagem: 'Sessão excluída com sucesso.'
            });

        } catch (erro) {
            res.json({
                mensagem: 'Erro ao deletar sessão.'
            })
        }
    }
}

module.exports = new SessoesController();