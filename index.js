(async () => {})();

//Functions to test Database
async function testManufacturer() {
  const Manufacturer = require("./models/Manufacturer");

  const newManufacturer = await Manufacturer.create({
    name: "Siemens",
  });
  console.log(newManufacturer);
}

async function testEquipSector() {
  const EquipSector = require("./models/EquipSector");

  const newEquipSector = await EquipSector.create({
    equipSector: "721/4",
  });
  console.log(newEquipSector);
}

async function testItem() {
  const Item = require("./models/Item");

  const newItem = await Item.create({
    codeIntern: 721302261,
    name: "Placa eletrônica",
    specification: "Mori SeikI Daikin main...",
    equipSectorId: 1,
    manufacturersId: 1,
    trayNumber: 67,
    trayLocation: "A1P4",
    minimumStock: 1,
    maxStock: 1,
    currentStock: 1,
  });
  console.log(newItem);
}
