const express = require('express');

const usersRouter = express.Router();
const usersController = require('../../controllers/users');
const userValidator = require('../../validators/users');
const { adminAuth } = require('../../middlewares/jwt-auth');
const expressHandler = require('../../middlewares/express-handler');

usersRouter.post('/', userValidator.create, expressHandler(usersController.create));

usersRouter.get('/', userValidator.findAll, expressHandler(usersController.findAll));

usersRouter.get('/:id', userValidator.findById, expressHandler(usersController.findById));

usersRouter.post('/login', userValidator.login, usersController.login);

usersRouter.delete('/:id', userValidator.deleteById, expressHandler(usersController.remove));

usersRouter.put('/:id', userValidator.update, adminAuth, usersController.update);

module.exports = usersRouter;
