'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Customers', [
      {
        name: 'Joy',
        email: 'joy@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kate',
        email: 'kate@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hanna',
        email: 'hanna@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ann',
        email: 'ann@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alex',
        email: 'alex@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
