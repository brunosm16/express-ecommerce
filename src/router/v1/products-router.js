const express = require('express');
const { adminAuth } = require('../../middlewares/jwt-auth');

const productsValidator = require('../../validators/products');
const productsController = require('../../controllers/products');

const productsRouter = express.Router();

productsRouter.post('/', productsValidator.create, adminAuth, productsController.create);
productsRouter.delete(
	'/:id',
	productsValidator.deleteById,
	adminAuth,
	productsController.deleteById
);
productsRouter.get('/', productsValidator.findAll, adminAuth, productsController.findAll);
productsRouter.get('/:id', productsValidator.findById, adminAuth, productsController.findById);
productsRouter.put('/:id', productsValidator.update, adminAuth, productsController.update);

module.exports = productsRouter;
