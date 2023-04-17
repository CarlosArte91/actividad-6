const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = Schema({
  code: {
    type: String,
    require: true,
    trim: true,
  },
  category: {
    type: String,
    require: true,
    trim: true,
    uppercase: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  stock: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

const Product = model('Product', productSchema);

module.exports = Product;


