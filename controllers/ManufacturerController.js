const Manufacturer = require("../models/Manufacturer");

module.exports = {
  //Create a manufacturer
  async store(req, res) {
    const { name, logo } = req.body;
    const manufacturer = await Manufacturer.create({ name, logo });
    return res.json(manufacturer);
  },
  //Find all manufacturers
  async findAll(req, res) {
    const allManufacturers = await Manufacturer.findAll();
    return res.json(allManufacturers);
  },
  //Find one specific manufacturer
  async findOne(req, res) {
    const manufacturer = await Manufacturer.findAll({
      where: {
        name: req.params.name,
      },
    });
    return res.json(manufacturer);
  },
  //Update one specific manufacturer
  async put(req, res) {
    const { name, logo } = req.body;
    await Manufacturer.update({ name, logo }, { where: { id: req.params.id } });

    return res.send("Update with success.");
  },
  //Delete a manufacturer
  async destroy(req, res) {
    await Manufacturer.destroy({ where: { id: req.params.id } });
    return res.send("Manufacturer deleted with success.");
  },
};
