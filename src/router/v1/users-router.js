const express = require('express');

const usersRouter = express.Router();

const usersController = require('../../controllers/users');

usersRouter.post('/', usersController.create);

module.exports = usersRouter;
