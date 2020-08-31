'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('telefones', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_fornecedor: {
        type: Sequelize.INTEGER,
      },
      ddd: {
        type: Sequelize.INTEGER,
      },
      numero: {
        type: Sequelize.INTEGER,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('telefones');
  }
};
