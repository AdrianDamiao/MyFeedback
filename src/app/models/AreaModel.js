const { Model, DataTypes } = require('sequelize');

class AreaModel extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            empresa_id: DataTypes.BIGINT
        }, {
            sequelize,
            tableName: 'areas'
        })
    }

    static associate(models){
        this.belongsTo(models.EmpresaModel, { foreignKey: 'id', as: 'area_empresa'})
    }
}

module.exports = AreaModel;