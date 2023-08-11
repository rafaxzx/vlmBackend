const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Manufacturer = sequelize.define("manufacturers", {
  name: DataTypes.STRING,
  logo: DataTypes.BLOB,
});

module.exports = Manufacturer;
