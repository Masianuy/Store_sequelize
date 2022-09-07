'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Models', [
      {
        title: 'Model GOM',
        brand_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Model HTP',
        brand_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Model QQQ',
        brand_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Model CDA',
        brand_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Model ITR',
        brand_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Models', null, {});
  }
};
