const { Router } = require('express');
const productRouter = require('./product.router');
const categoryRouter = require('./category.router');
const codeRouter = require('./code.router');

const router = Router();

router.use(productRouter);
router.use(categoryRouter);
router.use(codeRouter);

module.exports = router;

