const Manufacturer = require("../models/Manufacturer");
const EquipSector = require("../models/EquipSector");
const Item = require("../models/Item");

Item.hasOne(Manufacturer, {
  foreingKey: "manufacturersId",
  as: "manufacturer",
});
Item.hasOne(EquipSector, { foreingKey: "equipSectorId", as: "equipSector" });

module.exports = { Item, Manufacturer, EquipSector };
