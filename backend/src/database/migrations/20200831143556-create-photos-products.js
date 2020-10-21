'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('photos_products', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_foto: {
        type: Sequelize.INTEGER,
        references: { model: 'photos', key: 'id' },
        onDelete: 'CASCADE',
      },
      id_produto: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('photos_products');
  }
};
