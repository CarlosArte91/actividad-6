const { Router } = require('express');
const {
  createCategory,
  readCategories,
  deleteCategory
} = require('../controllers/category.controller');

const categoryRouter = Router();

categoryRouter.post('/category', createCategory);
categoryRouter.get('/categories', readCategories);
categoryRouter.delete('/category/:id', deleteCategory);

module.exports = categoryRouter;

