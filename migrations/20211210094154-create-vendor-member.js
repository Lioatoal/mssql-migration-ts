'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VendorMember', {
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
      MemberId: {
        type: 'bigint',
        allowNull: false,
      },
      MemberIdType: {
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
    return queryInterface.dropTable('VendorMember');
  }
};
