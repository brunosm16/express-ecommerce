const express = require('express');
const usersRouter = require('./users-router');

const routerV1 = express.Router();

routerV1.use('/users', usersRouter);

module.exports = routerV1;
