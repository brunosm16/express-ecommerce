const express = require('express');
const usersRouter = require('./users-router');
const addressesRouter = require('./addresses-router');
const categoriesRouter = require('./categories-router');
const ordersRouter = require('./orders-router');
const productsRouter = require('./products-router');
const resetUserPasswordRouter = require('./reset-user-password-router');

const routerV1 = express.Router();

routerV1.use('/users', usersRouter);
routerV1.use('/addresses', addressesRouter);
routerV1.use('/categories', categoriesRouter);
routerV1.use('/orders', ordersRouter);
routerV1.use('/products', productsRouter);
routerV1.use('/reset-user-password', resetUserPasswordRouter);

module.exports = routerV1;
