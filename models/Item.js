const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Item = sequelize.define("items", {
  codeIntern: DataTypes.INTEGER,
  name: DataTypes.STRING,
  specification: DataTypes.STRING,
  equipSectorId: DataTypes.INTEGER,
  manufacturersId: DataTypes.INTEGER,
  trayNumber: DataTypes.INTEGER,
  trayLocation: DataTypes.STRING,
  minimumStock: DataTypes.INTEGER,
  maxStock: DataTypes.INTEGER,
  currentStock: DataTypes.INTEGER,
  image: DataTypes.BLOB,
});

module.exports = Item;
