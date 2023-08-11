const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const EquipSector = sequelize.define("equipSectors", {
  equipSector: DataTypes.STRING,
});

module.exports = EquipSector;
