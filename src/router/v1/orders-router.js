const express = require('express');

const ordersValidator = require('../../validators/orders');
const ordersController = require('../../controllers/orders');

const ordersRouter = express.Router();

ordersRouter.post('/', ordersValidator.create, ordersController.create);

module.exports = ordersRouter;
