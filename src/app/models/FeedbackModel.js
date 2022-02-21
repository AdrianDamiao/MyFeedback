const { Model, DataTypes } = require('sequelize');

class FeedbackModel extends Model {
    static init(sequelize){
        super.init({
            nota: DataTypes.FLOAT,
            descricao: DataTypes.STRING(512),
            colaborador_id: DataTypes.UUIDV4,
        }, {
            sequelize,
            tableName: 'feedbacks'
        })
    }

    static associate(models){
        this.belongsTo(models.ColaboradorModel, { foreignKey: 'id', as: 'feedback_colaborador' });
    }
}

module.exports = FeedbackModel;