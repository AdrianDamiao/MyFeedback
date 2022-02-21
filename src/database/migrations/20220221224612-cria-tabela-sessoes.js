'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('sessoes', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
        default: Sequelize.fn('uuid_generate_v4')
      },
      token: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      colaborador_id: {
        type: Sequelize.UUID,
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
    return queryInterface.dropTable('sessoes');
  }
};
