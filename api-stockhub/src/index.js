require('dotenv').config();
require('./config/mongo.config');

const express = require('express');
const cors = require('cors');
const router = require('./routers');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 9000;
app.listen(
  PORT,
  () => console.log(`Listen on port ${PORT}`)
);
