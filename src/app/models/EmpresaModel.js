const { Model, DataTypes } = require('sequelize');

class EmpresaModel extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            site: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'empresas'
        })
    }
}

module.exports = EmpresaModel;