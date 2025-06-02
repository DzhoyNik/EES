'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('employees', ['phone'], {
      unique: true,
      name: 'unique_phone_index',
    });
    await queryInterface.addIndex('employees', ['email'], {
      unique: true,
      name: 'unique_email_index',
    });
    await queryInterface.addIndex('employees', ['login'], {
      unique: true,
      name: 'unique_login_index',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('employees', 'unique_phone_index');
    await queryInterface.removeIndex('employees', 'unique_email_index');
    await queryInterface.removeIndex('employees', 'unique_login_index');
  }
};