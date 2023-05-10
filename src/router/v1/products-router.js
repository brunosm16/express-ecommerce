const express = require('express');
const { adminAuth } = require('../../middlewares/jwt-auth');

const productsValidator = require('../../validators/products');
const productsController = require('../../controllers/products');

const productsRouter = express.Router();

productsRouter.post('/', productsValidator.create, adminAuth, productsController.create);

module.exports = productsRouter;
