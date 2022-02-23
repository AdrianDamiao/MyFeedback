const ColaboradorModel = require("../models/ColaboradorModel");

class ColaboradoresController {
    async buscaTodos(req, res){
        try{
            const colaboradores = await ColaboradorModel.findAll();
            
            res.json({
                msg: 'Todas as colaboradores cadastradas',
                colaboradores: colaboradores
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao listar colaboradores.',
                erro: erro
            });
        }
    }

    async cria(req, res){
        try{
            const colaboradorInputDTO = req.body;
            const colaboradorNoDb = await ColaboradorModel.create(colaboradorInputDTO);

            res.json({
                msg: 'Colaborador cadastrado com sucesso.',
                colaborador: colaboradorNoDb
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao cadastrar colaborador.',
                erro: erro
            });
        }
    }

    async atualiza(req, res) {
        try {
            const colaboradorInputDTO = req.body;

            const colaboradorNoDb = await ColaboradorModel.findOne({
                where: {
                    id: req.params.id
                } 
            })

            if (colaboradorNoDb == null) {
                res.json({
                    mensagem: 'Colaborador inexistente.',
                    status: '404'
                });
            }

            colaboradorNoDb.set(colaboradorInputDTO);
            await colaboradorNoDb.save();

            res.json({
                    mensagem: 'Colaborador atualizado com sucesso.'
                });
        } catch (erro) {
            res.json({
                mensagem: 'Erro ao atualizar uma colaborador.'
            });
        }
    }

    async deleta(req, res) {
        try {
            const colaboradorId = req.params.id;
            
            const colaboradorNoDb = await ColaboradorModel.findOne({
                where: {
                    id: colaboradorId
                }
            });

            if (colaboradorNoDb == null) {
                res.json({
                    mensagem: 'Colaborador inexistente.'
                });
            }
            
            await colaboradorNoDb.destroy();

            res.json({
                mensagem: 'Colaborador excluído com sucesso.'
            });

        } catch (erro) {
            res.json({
                mensagem: 'Erro ao deletar colaborador.'
            })
        }
    }
}

module.exports = new ColaboradoresController();