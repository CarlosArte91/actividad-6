const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB stockhub'))
  .catch((error) => console.log(error))

module.exports = mongoose;


