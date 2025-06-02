'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addIndex('students', ['phone'], {
      unique: true,
      name: 'unique_phone_index',
    });
    await queryInterface.addIndex('students', ['email'], {
      unique: true,
      name: 'unique_email_index',
    });
    await queryInterface.addIndex('students', ['login'], {
      unique: true,
      name: 'unique_login_index',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('students', 'unique_phone_index');
    await queryInterface.removeIndex('students', 'unique_email_index');
    await queryInterface.removeIndex('students', 'unique_login_index');
  }
};