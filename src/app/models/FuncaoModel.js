const { Model, DataTypes } = require('sequelize');

class FuncaoModel extends Model {
    static init(sequelize){
        super.init({
            nota: DataTypes.FLOAT,
            descricao: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'funcoes'
        })
    }
}

module.exports = FuncaoModel;