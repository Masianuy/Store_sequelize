'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stores', [
      {
        title: 'Amazon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rozetka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Comfy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Epicentr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Obey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
