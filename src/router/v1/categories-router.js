const express = require('express');
const categoriesValidator = require('../../validators/categories');
const categoriesController = require('../../controllers/categories');
const { adminAuth } = require('../../middlewares/jwt-auth');

const categoriesRouter = express.Router();

categoriesRouter.post('/', categoriesValidator.create, adminAuth, categoriesController.create);
categoriesRouter.delete(
	'/:id',
	categoriesValidator.deleteById,
	adminAuth,
	categoriesController.deleteById
);
categoriesRouter.get('/', categoriesValidator.findAll, adminAuth, categoriesController.findAll);
categoriesRouter.get(
	'/:id',
	categoriesValidator.findById,
	adminAuth,
	categoriesController.findById
);
categoriesRouter.put('/:id', categoriesValidator.update, adminAuth, categoriesController.update);

module.exports = categoriesRouter;
