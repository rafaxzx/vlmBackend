const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Manufacturers = sequelize.define("manufacturers", {
  name: DataTypes.STRING,
  logo: DataTypes.BLOB,
});

module.exports = Manufacturers;
