'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Drugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entpName: {
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      efficiency: {
        type: Sequelize.TEXT
      },
      useMethod: {
        type: Sequelize.STRING
      },
      warning: {
        type: Sequelize.TEXT
      },
      intrcnt: {
        type: Sequelize.TEXT
      },
      sideEffect: {
        type: Sequelize.TEXT
      },
      depositMethod: {
        type: Sequelize.STRING
      },
      itemImage: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Drugs');
  }
};