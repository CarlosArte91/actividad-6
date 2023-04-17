const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const codeSchema = Schema({
  code: {
    type: String,
  },
  category: {
    type: String,
    uppercase: true,
    require: true,
  },
});

const Code = model('Code', codeSchema);

module.exports = Code;


