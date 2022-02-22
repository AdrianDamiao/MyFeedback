const FuncaoModel = require("../models/FuncaoModel");

class FuncoesController {

    async buscaTodos(req, res){
        try{
            const funcoes = await FuncaoModel.findAll();
            
            res.json({
                msg: 'Todas as Funções cadastradas',
                funcao: funcoes
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao listar funções.',
                erro: erro
            });
        }
    }

    async cria(req, res){
        try{
            const funcaoInputDTO = req.body;
            console.log(funcaoInputDTO);
            const funcaoNoDb = await FuncaoModel.create(funcaoInputDTO);
            console.log(funcaoNoDb);
            res.json({
                msg: 'Função cadastrada com sucesso.',
                funcao: funcaoNoDb
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao cadastrar função.',
                erro: erro
            });
        }
    }

    async atualiza(req, res) {
        try {
            const funcaoInputDTO = req.body;

            const funcaoNoDb = await FuncaoModel.findOne({
                where: {
                    id: req.params.id
                } 
            })

            if (funcaoNoDb == null) {
                res.json({
                    mensagem: 'Função inexistente.',
                    status: '404'
                });
            }

            funcaoNoDb.set(funcaoInputDTO);
            await funcaoNoDb.save();

            res.json({
                    mensagem: 'Função atualizada com sucesso.'
                });
        } catch (erro) {
            res.json({
                mensagem: 'Erro ao atualizar uma função.'
            });
        }
    }

    async deleta(req, res) {
        try {
            const funcaoId = req.params.id;
            
            const funcaoNoDb = await FuncaoModel.findOne({
                where: {
                    id: funcaoId
                }
            });

            if (funcaoNoDb == null) {
                res.json({
                    mensagem: 'Função inexistente.'
                });
            }
            
            await funcaoNoDb.destroy();

            res.json({
                mensagem: 'Função excluída com sucesso.'
            });

        } catch (erro) {
            res.json({
                mensagem: 'Erro ao deletar função.'
            })
        }
    }
}

module.exports = new FuncoesController();