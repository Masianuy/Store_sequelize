'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brands', [
      {
        title: 'Google',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Bosch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Samsung',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Intel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cersanit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nike',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
