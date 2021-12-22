'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VendorMember', {
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
      MemberId: {
        type: 'int',
        allowNull: false,
      },
      MemberIdType: {
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
    return queryInterface.dropTable('VendorMember');
  }
};
