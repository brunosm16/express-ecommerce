const express = require('express');

const usersRouter = express.Router();
const usersController = require('../../controllers/users');
const userValidator = require('../../validators/users');

usersRouter.post('/', userValidator.create, usersController.create);

module.exports = usersRouter;
