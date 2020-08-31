'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('logs', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      campo: {
        type: Sequelize.STRING,
      },
      valor_anterior: {
        type: Sequelize.STRING,
      },
      valor_posterior: {
        type: Sequelize.STRING,
      },
      entidade: {
        type: Sequelize.STRING,
      },
      op: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('logs');
  }
};
