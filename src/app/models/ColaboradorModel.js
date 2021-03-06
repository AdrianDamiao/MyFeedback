const { Model, DataTypes } = require('sequelize');

class ColaboradorModel extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            funcao_id: DataTypes.BIGINT,
            area_id: DataTypes.BIGINT
        }, {
            sequelize,
            tableName: 'colaboradores'
        })
    }

    static associate(models){
        this.belongsTo(models.FuncaoModel, { foreignKey: 'id', as: 'colaborador_funcao' });
        this.belongsTo(models.AreaModel, { foreignKey: 'id', as: 'colaborador_area' });
    }
}

module.exports = ColaboradorModel;