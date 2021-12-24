'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VendorProfitSharingPlan', {
      Id: {
        autoIncrement: true,
        primaryKey: true,        
        type: 'int',
        allowNull: false,
      },
      VendorId: {
        type: 'int',
        allowNull: false,
      },
      PlanId: {
        type: 'int',
        allowNull: false,
      },
      SDate: {
        type: 'datetime',
        allowNull: false,
      },
      EDate: {
        type: 'datetime',
        allowNull: false,
      },
      State: {
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
    return queryInterface.dropTable('VendorProfitSharingPlan');
  }
};
