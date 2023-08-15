const express = require("express");

const routes = express.Router();

//Import of controllers
const ManufacturerController = require("../controllers/ManufacturerController");
const EquipSectorController = require("../controllers/EquipSectorController");

//Routes for table manufacturers C.R.U.D.
routes.post("/manufacturers", ManufacturerController.store);
routes.get("/manufacturers", ManufacturerController.findAll);
routes.put("/manufacturers/:id", ManufacturerController.put);
routes.delete("/manufacturer/:id", ManufacturerController.destroy);

//Routes for table equipSectors C.R.U.D.
routes.post("/equipSectors", EquipSectorController.store);
routes.get("/equipSectors", EquipSectorController.findAll);
routes.put("/equipSectors/:id", EquipSectorController.put);
routes.delete("/equipSectors/:id", EquipSectorController.destroy);

module.exports = routes;
