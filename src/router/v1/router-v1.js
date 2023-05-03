const express = require('express');
const usersRouter = require('./users-router');
const addressesRouter = require('./addresses-router');
const categoriesRouter = require('./categories-router');
const ordersRouter = require('./orders-router');

const routerV1 = express.Router();

routerV1.use('/users', usersRouter);
routerV1.use('/addresses', addressesRouter);
routerV1.use('/categories', categoriesRouter);
routerV1.use('/orders', ordersRouter);

module.exports = routerV1;
