'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProfitSharing', {
      Id: {
        autoIncrement: true,
        primaryKey: true,        
        type: 'bigint',
        allowNull: false,
      },
      VenderId: {
        type: 'bigint',
        allowNull: false,
      },
      PlanId: {
        type: 'bigint',
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
    return queryInterface.dropTable('ProfitSharing');
  }
};
