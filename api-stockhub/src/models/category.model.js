const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const categorySchema = Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    uppercase: true,
    minlength: 4,
    match: /^[^\s]+$/,
  }
});

const Category = model('Category', categorySchema);

module.exports = Category;
