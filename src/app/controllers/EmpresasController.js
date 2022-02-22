const EmpresaModel = require('../models/EmpresaModel');

class EmpresasController{
    
    async buscaTodos(req, res) {
        try {
            const empresas = await EmpresaModel.findAll();

            res.json({
                mensagem: 'Todas as empresas cadastradas.',
                empresasNoDb: empresas
            });
        } catch (erro) {
            res.json({
                mensagem: 'Erro ao listar empresas.'
            });
        }
    }
    
    async cria(req, res) {
        try {
            const empresaInputDto = req.body;
            const empresa = await EmpresaModel.create(empresaInputDto);
        
            res.json({
                mensagem: 'Empresa criada com sucesso.',
                empresaNova: empresa
            });
        } catch (erro) {
            res.json({
                mensagem: 'Erro ao criar empresa.',
                status: erro
            });
        }
    }

    async atualiza(req, res) {
        try {
            const empresa = req.body; 

            const empresaNoDb = await EmpresaModel.findOne({
                where: {
                    id: empresa.id
                } 
            })

            if (empresaNoDb == null) {
                res.json({
                    mensagem: 'Empresa inexistente.',
                    status: '404 - Not Found'
                });
            }

            empresaNoDb = empresa;

            await EmpresaModel.update(empresaNoDb);

            res.json({
                    mensagem: 'Empresa atualizada com sucesso.'
                });
        } catch (erro) {
            res.json({
                mensagem: 'Erro ao atualizar uma empresa.'
            });
        }
    }

    async deleta(req, res) {
        try {
            const empresa = await EmpresaModel.findOne({
                where: {
                    id: empresa.id
                }
            });

            if (empresa == null) {
                res.json({
                    mensagem: 'Empresa inexistente.'
                });
            }

            await EmpresaModel.destroy(empresa);

            res.json({
                mensagem: 'Empresa excluida com sucesso.'
            });
        } catch (erro) {
            res.json({
                mensagem: 'Erro ao deletar empresa.'
            })
        }
    }
}

module.exports = new EmpresasController();