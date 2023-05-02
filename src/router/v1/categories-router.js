const express = require('express');
const categoriesValidator = require('../../validators/categories');

const categoriesRouter = express.Router();

categoriesRouter.post('/', categoriesValidator.create);

module.exports = categoriesRouter;
