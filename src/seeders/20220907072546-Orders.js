'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        code: 1,
        data: '2020-01-10',
        customer_id: 1,
        paid: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 2,
        data: '2020-02-10',
        customer_id: 2,
        paid: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 3,
        data: '2020-03-10',
        customer_id: 3,
        paid: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 4,
        data: '2020-04-10',
        customer_id: 4,
        paid: 4000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 5,
        data: '2020-05-10',
        customer_id: 5,
        paid: 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
