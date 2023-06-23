const express = require('express');
const { adminAuth } = require('../../middlewares/jwt-auth');
const expressHandler = require('../../middlewares/express-handler');

const ordersValidator = require('../../validators/orders');
const ordersController = require('../../controllers/orders');

const ordersRouter = express.Router();

ordersRouter.post('/', ordersValidator.create, adminAuth, expressHandler(ordersController.create));
ordersRouter.delete(
	'/:id',
	ordersValidator.deleteById,
	adminAuth,
	expressHandler(ordersController.deleteById)
);
ordersRouter.get('/', ordersValidator.findAll, adminAuth, ordersController.findAll);
ordersRouter.get(
	'/:id',
	ordersValidator.findOrdersByUser,
	adminAuth,
	ordersController.findOrdersByUser
);
ordersRouter.put('/:id', ordersValidator.update, adminAuth, ordersController.update);

module.exports = ordersRouter;
