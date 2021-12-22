'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MatchMakingRateRule', {
      Id: {
        autoIncrement: true,
        primaryKey: true,        
        type: 'int',
        allowNull: false,
      },
      RuleType: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Name: {
        type: Sequelize.STRING(32),
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
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      CreateTime: {
        type: 'datetime',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      UpdateUser: {
        type: Sequelize.STRING(128),
      },
      UpdateTime: {
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
