const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const EquipSector = sequelize.define("equipSector", {
  equipSector: DataTypes.STRING,
});
