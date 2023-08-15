const Item = require("../models/Item");

module.exports = {
  //Create a item
  async store(req, res) {
    const {
      codeIntern,
      name,
      specification,
      equipSectorId,
      manufacturersId,
      trayNumber,
      trayLocation,
      minimumStock,
      maxStock,
      currentStock,
      image,
    } = req.body;
    const item = await Item.create({
      codeIntern,
      name,
      specification,
      equipSectorId,
      manufacturersId,
      trayNumber,
      trayLocation,
      minimumStock,
      maxStock,
      currentStock,
      image,
    });
    return res.json(item);
  },
  //Find all items
  async findAll(req, res) {
    const allItems = await Item.findAll();
    return res.json(allItems);
  },
  //Find one specific item
  async findOne(req, res) {
    const item = await Item.findAll({
      where: {
        codeIntern: req.params.codeIntern,
      },
    });
    return res.json(item);
  },
  //Update one specific item
  async put(req, res) {
    const {
      codeIntern,
      name,
      specification,
      equipSectorId,
      manufacturersId,
      trayNumber,
      trayLocation,
      minimumStock,
      maxStock,
      currentStock,
      image,
    } = req.body;
    await Item.update(
      {
        codeIntern,
        name,
        specification,
        equipSectorId,
        manufacturersId,
        trayNumber,
        trayLocation,
        minimumStock,
        maxStock,
        currentStock,
        image,
      },
      { where: { id: req.params.id } }
    );

    return res.send("Updated with success.");
  },
  //Delete a item
  async destroy(req, res) {
    await Item.destroy({ where: { id: req.params.id } });
    return res.send("Item deleted with success.");
  },
};
