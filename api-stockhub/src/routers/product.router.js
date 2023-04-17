const { Router } = require('express');
const {
  createProduct,
  readProducts,
  updateProduct,
  deleteProduct,
  readProductsFiltered,
  readProductByCode
} = require('../controllers/product.controller');

const productRouter = Router();

productRouter.post('/product', createProduct);
productRouter.get('/products', readProducts);
productRouter.patch('/product/:id', updateProduct);
productRouter.delete('/product/:id', deleteProduct)
productRouter.get('/product', readProductsFiltered);
productRouter.get('/product/:code', readProductByCode);

module.exports = productRouter;


