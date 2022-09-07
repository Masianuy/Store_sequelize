'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    modelName: 'Model',
  });
  return Model;
};