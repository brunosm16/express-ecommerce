const express = require('express');

const usersRouter = express.Router();
const usersController = require('../../controllers/users');
const userValidator = require('../../validators/users');
const { adminAuth } = require('../../middlewares/jwt-auth');

usersRouter.get('/', userValidator.findAll, adminAuth, usersController.findAll);

usersRouter.post('/', userValidator.create, usersController.create);

usersRouter.delete('/:id', userValidator.deleteById, adminAuth, usersController.deleteById);

module.exports = usersRouter;
