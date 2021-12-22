'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Vendor',
      {
        Id: {
          autoIncrement: true,
          primaryKey: true,
          type: 'int',
          allowNull: false,
        },
        RuleId: {
          type: 'int',
          allowNull: false,
        },
        Name: {
          type: Sequelize.STRING(64),
          allowNull: false,
        },
        Status: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        TaxId: {
          type: 'varchar(32)',
          allowNull: false,
        },
        Principal: {
          type: Sequelize.STRING(32),
          defaultValue: '',
        },
        Address: {
          type: Sequelize.STRING(128),
          defaultValue: '',
        },
        Contact: {
          type: Sequelize.STRING(32),
          defaultValue: '',
        },
        Telephone: {
          type: 'varchar(32)',
          defaultValue: '',
        },
        Email: {
          type: 'varchar(128)',
          defaultValue: '',
        },
        HasDispatchFee:{
          type: Sequelize.BOOLEAN,
          defaultValue: true,
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
    return queryInterface.dropTable('Vendor');
  }
};
