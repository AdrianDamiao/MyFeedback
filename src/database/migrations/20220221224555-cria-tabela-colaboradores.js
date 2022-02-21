'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('colaboradores', {
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
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      funcao_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'funcoes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      area_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'areas',
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
    return queryInterface.dropTable('colaboradores');
  }
};
