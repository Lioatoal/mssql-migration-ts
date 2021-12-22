'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Plan', {
      Id: {
        autoIncrement: true,
        primaryKey: true,        
        type: 'int',
        allowNull: false,
      },
      Title: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      PlanType: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      TeamFee: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      SendAmount: {
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
    return queryInterface.dropTable('Plan');
  }
};
