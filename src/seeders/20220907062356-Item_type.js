'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Item_types', [
      {
        title: 'Laptop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Vase',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Refrigerator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lamp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sneakers',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Item_types', null, {});
  }
};
