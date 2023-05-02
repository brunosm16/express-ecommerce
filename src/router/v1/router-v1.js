const express = require('express');
const usersRouter = require('./users-router');
const addressesRouter = require('./addresses-router');

const routerV1 = express.Router();

routerV1.use('/users', usersRouter);
routerV1.use('/addresses', addressesRouter);

module.exports = routerV1;
