'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Plan', {
      Id: {
        autoIncrement: true,
        primaryKey: true,        
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      Title: {
        type: 'nvarchar(32)',
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
    return queryInterface.dropTable('Plan');
  }
};
