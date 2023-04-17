const Category = require('.././models/category.model');
const Code = require('.././models/code.model');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const categories = await Category.find();
  const found = categories.find((category) => category.name === name.toUpperCase());

  if (!found) {
    const newCategory = await Category.create({ name });
    const nameCode = `${newCategory.name.substr(0, 4)}001`;

    const newCode = await Code.create({
      code: nameCode,
      category: name,
    });
    res.json(newCode);
  } else {
    const prefix = found.name.substr(0, 4);

    const result = await Code
      .find({ code: { $regex: `^${prefix}` } }, 'code')
      .sort({ code: -1 })
      .limit(1)

    const highestCode = result[0].code;
    const highestNumber = parseInt(
      highestCode.slice(prefix.length), 10
    );
    const newNumber = highestNumber + 1;
    const nameCode = `${prefix}${newNumber.toString().padStart(3, "0")}`;

    const newCode = await Code.create({
      code: nameCode,
      category: name,
    });
    res.json(newCode);
  }
};

const readCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  await Category.findByIdAndDelete(id);
  res.json({message: 'Category was deleted'});
};

module.exports = {
  createCategory,
  readCategories,
  deleteCategory,
};
