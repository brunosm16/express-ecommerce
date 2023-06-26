const express = require('express');
const { adminAuth } = require('../../middlewares/jwt-auth');

const productsValidator = require('../../validators/products');
const productsController = require('../../controllers/products');
const expressHandler = require('../../middlewares/express-handler');

const productsRouter = express.Router();

productsRouter.post(
	'/',
	productsValidator.create,
	adminAuth,
	expressHandler(productsController.create)
);
productsRouter.delete(
	'/:id',
	productsValidator.deleteById,
	adminAuth,
	expressHandler(productsController.deleteById)
);
productsRouter.get('/', productsValidator.findAll, adminAuth, productsController.findAll);
productsRouter.get('/:id', productsValidator.findById, adminAuth, productsController.findById);
productsRouter.put('/:id', productsValidator.update, adminAuth, productsController.update);

module.exports = productsRouter;
