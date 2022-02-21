'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('funcoes', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
        default: Sequelize.fn('uuid_generate_v4')
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
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
    return queryInterface.dropTable('funcoes');
  }
};
