const { Model, DataTypes } = require('sequelize');

class SessaoModel extends Model {
    static init(sequelize){
        super.init({
            token: DataTypes.STRING(512),
            status: DataTypes.BOOLEAN,
            colaborador_id: DataTypes.UUIDV4,
        }, {
            sequelize,
            tableName: 'sessoes'
        })
    }

    static associate(models){
        this.belongsTo(models.ColaboradorModel, { foreignKey: 'id', as: 'sessao_colaborador' });
    }
}

module.exports = SessaoModel;