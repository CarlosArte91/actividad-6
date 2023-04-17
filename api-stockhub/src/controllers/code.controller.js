const Code = require('../models/code.model');

const readCodes = async (req, res) => {
  const codes = await Code.find().sort({ code: 1 });
  res.json(codes);
};

const updateCode = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  await Code.findByIdAndUpdate(id, body);
  res.json({ message: 'The code was updated successfully.' })
};

const readCodesByCategory = async (req, res) => {
  const { category } = req.params;

  const codes = await Code.find({ category: category.toUpperCase() });
  res.json(codes);
};

module.exports = {
  readCodes,
  updateCode,
  readCodesByCategory,
};
