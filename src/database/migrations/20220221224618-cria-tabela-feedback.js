'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('feedbacks', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
      },
      nota: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      colaborador_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'colaboradores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('feedbacks');
  }
};
