'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('photos_products', { 
      id_foto: {
        type: Sequelize.INTEGER,
      },
      id_produto: {
        type: Sequelize.INTEGER,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('photos_products');
  }
};
