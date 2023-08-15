const EquipSector = require("../models/EquipSector");

module.exports = {
  //Create an EquipSector
  async store(req, res) {
    const { equipSector } = req.body;
    const newEsquipSector = await EquipSector.create({ equipSector });
    return res.json(newEsquipSector);
  },
  //FindAll
  async findAll(req, res) {
    const allSectors = await EquipSector.findAll();
    return res.json(allSectors);
  },
  //Find one
  async findOne(req, res) {
    const oneSector = await EquipSector.findAll({
      where: { equipSector: req.params.equipSector },
    });
  },
  //Update one specific equipSector
  async put(req, res) {
    const { equipSector } = req.body;
    await EquipSector.update({ equipSector }, { where: { id: req.params.id } });
    return res.send("Update with success.");
  },
  //Delete an equipSector
  async destroy(req, res) {
    await EquipSector.destroy({ where: { id: req.params.id } });
    return res.send("Equipament and/or Sector deleted with success.");
  },
};
