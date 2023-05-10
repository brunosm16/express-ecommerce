const express = require('express');
const { adminAuth } = require('../../middlewares/jwt-auth');

const ordersValidator = require('../../validators/orders');
const ordersController = require('../../controllers/orders');

const ordersRouter = express.Router();

ordersRouter.post('/', ordersValidator.create, adminAuth, ordersController.create);
ordersRouter.delete('/:id', ordersValidator.deleteById, adminAuth, ordersController.deleteById);
ordersRouter.get('/', ordersValidator.findAll, adminAuth, ordersController.findAll);
ordersRouter.get('/:id', ordersValidator.findById, adminAuth, ordersController.findById);
ordersRouter.put('/:id', ordersValidator.update, adminAuth, ordersController.update);

module.exports = ordersRouter;