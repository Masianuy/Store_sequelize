'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item_type.hasMany(models.Item, {foreignKey: 'type_id'});
    }
  }
  Item_type.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Item_type',
    tableName: 'Item_types',
    timestamps: false,
    underscored: true
  });
  return Item_type;
};