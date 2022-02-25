const express = require('express');
const { validateJWT } = require('../middlewares/userValidations');
const CategoryController = require('../controllers/categoryController');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validateJWT, CategoryController.create);
categoriesRouter.get('/', validateJWT, CategoryController.getAll);

module.exports = categoriesRouter;