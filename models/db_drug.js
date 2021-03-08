'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DB_drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DB_drug.init({
    itemName: DataTypes.STRING,
    printFront: DataTypes.STRING,
    drugShape: DataTypes.STRING,
    colorClass1: DataTypes.STRING,
    colorClass2: DataTypes.STRING,
    formCodeName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DB_drug',
    timestamps: false,
  });
  return DB_drug;
};