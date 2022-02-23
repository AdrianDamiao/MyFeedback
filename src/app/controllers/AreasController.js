const AreaModel = require("../models/AreaModel");

class AreasController {
    async buscaTodos(req, res){
        try{
            const areas = await AreaModel.findAll();
            
            res.json({
                msg: 'Todas as áreas cadastradas',
                areas: areas
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao listar áreas.',
                erro: erro
            });
        }
    }

    async cria(req, res){
        try{
            const areaInputDTO = req.body;
            const areaNoDb = await AreaModel.create(areaInputDTO);

            res.json({
                msg: 'Área cadastrada com sucesso.',
                area: areaNoDb
            });
        }catch(erro){
            res.json({
                msg: 'Erro ao cadastrar área.',
                erro: erro
            });
        }
    }

    async atualiza(req, res) {
        try {
            const areaInputDTO = req.body;

            const areaNoDb = await AreaModel.findOne({
                where: {
                    id: req.params.id
                } 
            })

            if (areaNoDb == null) {
                res.json({
                    mensagem: 'Área inexistente.',
                    status: '404'
                });
            }

            areaNoDb.set(areaInputDTO);
            await areaNoDb.save();

            res.json({
                    mensagem: 'Área atualizada com sucesso.'
                });
        } catch (erro) {
            res.json({
                mensagem: 'Erro ao atualizar área.'
            });
        }
    }

    async deleta(req, res) {
        try {
            const areaId = req.params.id;
            
            const areaNoDb = await AreaModel.findOne({
                where: {
                    id: areaId
                }
            });

            if (areaNoDb == null) {
                res.json({
                    mensagem: 'Área inexistente.'
                });
            }
            
            await areaNoDb.destroy();

            res.json({
                mensagem: 'Área excluída com sucesso.'
            });

        } catch (erro) {
            res.json({
                mensagem: 'Erro ao deletar área.'
            })
        }
    }
}

module.exports = new AreasController();