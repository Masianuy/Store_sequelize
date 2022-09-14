'use strict';

const { item_categories } = require('../constants/item_categories-db');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Item_categories', item_categories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Item_categories', null, {});
  }
};
