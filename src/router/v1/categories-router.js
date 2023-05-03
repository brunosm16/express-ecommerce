const express = require('express');
const categoriesValidator = require('../../validators/categories');
const categoriesController = require('../../controllers/categories');

const categoriesRouter = express.Router();

categoriesRouter.post('/', categoriesValidator.create, categoriesController.create);

module.exports = categoriesRouter;
