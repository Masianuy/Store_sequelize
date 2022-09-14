'use strict';

const { item_types } = require('../constants/item_type-db');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Item_types', item_types, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Item_types', null, {});
  }
};
