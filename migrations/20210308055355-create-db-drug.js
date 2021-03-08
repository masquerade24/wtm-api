'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DB_drugs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      printFront: {
        type: Sequelize.STRING
      },
      drugShape: {
        type: Sequelize.STRING
      },
      colorClass1: {
        type: Sequelize.STRING
      },
      colorClass2: {
        type: Sequelize.STRING
      },
      formCodeName: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DB_drugs');
  }
};