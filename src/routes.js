const express = require("express");

const routes = express.Router();

//Import of controllers
const ManufacturerController = require("../controllers/ManufacturerController");
const EquipSectorController = require("../controllers/EquipSectorController");
const ItemController = require("../controllers/ItemController");

//Routes for table manufacturers C.R.U.D.
routes.post("/manufacturers", ManufacturerController.store);
routes.get("/manufacturers", ManufacturerController.findAll);
routes.put("/manufacturers/:id", ManufacturerController.put);
routes.delete("/manufacturers/:id", ManufacturerController.destroy);

//Routes for table equipSectors C.R.U.D.
routes.post("/equipSectors", EquipSectorController.store);
routes.get("/equipSectors", EquipSectorController.findAll);
routes.put("/equipSectors/:id", EquipSectorController.put);
routes.delete("/equipSectors/:id", EquipSectorController.destroy);

//Routes for table items
routes.post("/items", ItemController.store);
routes.get("/items", ItemController.findAll);
routes.put("/items", ItemController.put);
routes.delete("/items", ItemController.destroy);

module.exports = routes;
