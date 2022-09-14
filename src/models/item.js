'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Item_category, {foreignKey: 'category_id'});
      Item.belongsTo(models.Item_type, {foreignKey: 'type_id'});
      Item.belongsTo(models.Brand, {foreignKey: 'brand_id'});
      Item.belongsTo(models.Product_model, {foreignKey: 'model_id'});
      Item.belongsTo(models.Store, {foreignKey: 'store_id'});
      Item.belongsToMany(models.Order, {through: 'Orders_Items'});
    }
  }
  Item.init({
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    model_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: DataTypes.REAL(11, 2),
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'Items',
    timestamps: false,
    underscored: true
  });
  return Item;
};