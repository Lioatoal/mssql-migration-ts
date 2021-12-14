'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendor',
      {
        Id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        RuleId: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
        Name: {
          type: 'nvarchar(64)',
          allowNull: false,
        },
        Status: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        TaxId: {
          type: Sequelize.STRING(32),
          allowNull: false,
        },
        Principal: {
          type: 'nvarchar(32)',
        },
        Address: {
          type: 'nvarchar(128)',
        },
        Contact: {
          type: 'nvarchar(32)',
        },
        Telephone: {
          type: Sequelize.STRING(32),
        },
        Email: {
          type: Sequelize.STRING(128),
        },
        HasDispatchFee:{
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        Status:{
          type: Sequelize.BOOLEAN,
          defaultValue: true,
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
    return queryInterface.dropTable('Vendor');
  }
};
