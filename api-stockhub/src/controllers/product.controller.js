const Product = require('../models/product.model');

const createProduct = async (req, res) => {
  const { body } = req;
  await Product.create(body);
  res.json({ message: 'The new product was created successfully.' });
};

const readProducts = async (req, res) => {
  const products = await Product.find().sort({ code: 1 });
  res.json(products)
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  await Product.findByIdAndUpdate(id, body);
  console.log(id);
  console.log(body);
  res.json({ message: 'The product was updated successfully.' })
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.json({message: 'Product was deleted'});
};

const readProductsFiltered = async (req, res) => {
  let { filter, search } = req.query;

  filter = filter.toLowerCase();

  const query = {};
  query[filter] = { $regex: search, $options: "i" };

  const products = await Product.find(query).sort({ code: 1 });
  res.json(products);
};

const readProductByCode = async (req, res) => {
  const { code } = req.params;
  const product = await Product.find({ code });
  res.json(product);
};

module.exports = {
  createProduct,
  readProducts,
  updateProduct,
  deleteProduct,
  readProductsFiltered,
  readProductByCode,
};


