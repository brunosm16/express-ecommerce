const express = require('express');
const categoriesValidator = require('../../validators/categories');
const categoriesController = require('../../controllers/categories');

const categoriesRouter = express.Router();

categoriesRouter.post('/', categoriesValidator.create, categoriesController.create);
categoriesRouter.delete('/:id', categoriesValidator.deleteById, categoriesController.deleteById);
categoriesRouter.get('/', categoriesValidator.findAll, categoriesController.findAll);

module.exports = categoriesRouter;
