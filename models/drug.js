'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      db.Drug.belongsTo(db.User);
      // define association here
    }
  };
  Drug.init({
    entpName: DataTypes.STRING,
    itemName: DataTypes.STRING,
    efficiency: DataTypes.TEXT,
    useMethod: DataTypes.STRING,
    warning: DataTypes.TEXT,
    intrcnt: DataTypes.TEXT,
    sideEffect: DataTypes.TEXT,
    depositMethod: DataTypes.STRING,
    itemImage: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};