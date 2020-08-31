'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fotos_produtos', { 
      id_foto: {
        type: Sequelize.INTEGER,
      },
      id_produto: {
        type: Sequelize.INTEGER,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('fotos_produtos');
  }
};
