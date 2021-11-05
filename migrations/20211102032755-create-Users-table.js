'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserInfo', {
      Id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      RiderId: {
        unique: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
    })

    await  queryInterface.addIndex('UserInfo', ['RiderId', 'Phone'])
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserInfo');
  }
};
