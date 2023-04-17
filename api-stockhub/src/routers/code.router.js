const { Router } = require('express');
const {
  readCodes,
  updateCode,
  readCodesByCategory
} = require('../controllers/code.controller');

const codeRouter = Router();

codeRouter.get('/codes', readCodes);
codeRouter.patch('/code/:id', updateCode);
codeRouter.get('/codes/:category', readCodesByCategory);

module.exports = codeRouter;


