'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Order.init({
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paid: DataTypes.REAL(11, 2)
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};