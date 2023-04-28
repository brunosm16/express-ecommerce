const express = require('express');

const usersRouter = express.Router();
const usersController = require('../../controllers/users');
const userValidator = require('../../validators/users');
const { adminAuth } = require('../../middlewares/jwt-auth');

usersRouter.get('/', userValidator.findAll, adminAuth, usersController.findAll);

usersRouter.get('/:id', userValidator.findById, adminAuth, usersController.findById);

usersRouter.post('/', userValidator.create, adminAuth, usersController.create);

usersRouter.post('/login', userValidator.login, usersController.login);

usersRouter.delete('/:id', userValidator.deleteById, adminAuth, usersController.deleteById);

module.exports = usersRouter;
