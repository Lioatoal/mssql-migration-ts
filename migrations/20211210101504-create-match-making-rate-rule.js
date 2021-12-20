'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MatchMakingRateRule', {
      Id: {
        autoIncrement: true,
        primaryKey: true,        
        type: 'bigint',
        allowNull: false,
      },
      RuleType: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Name: {
        type: 'nvarchar(32)',
        allowNull: false,
      },
      ConnectedRate: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      MobileRate:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      PayBy:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      CreateUser: {
        type: 'nvarchar(128)',
        allowNull: false,
      },
      CreateDate: {
        type: 'datetime',
        allowNull: false,
      },
      UpdateUser: {
        type: 'nvarchar(128)',
      },
      UpdateDate: {
        type: 'datetime',
      },
      IsDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MatchMakingRateRule');
  }
};
