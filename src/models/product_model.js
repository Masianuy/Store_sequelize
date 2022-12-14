'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_model.hasMany(models.Item, {foreignKey: 'model_id'})
      Product_model.belongsTo(models.Brand, {foreignKey: 'brand_id'})
    }
  }
  Model.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product_model',
    tableName: 'Product_models',
    timestamps: false,
    underscored: true
  });
  return Product_model;
};