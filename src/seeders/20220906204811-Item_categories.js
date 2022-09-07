'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Item_categories', [
      {
        title: 'Computers & Software',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Household appliances',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Interior Accessories',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sporting goods',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Item_categories', null, {});
  }
};
