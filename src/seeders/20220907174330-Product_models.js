'use strict';

const { product_models } = require('../constants/product_models-db');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Product_models', product_models, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_models', null, {});
  }
};
