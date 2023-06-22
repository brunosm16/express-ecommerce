const express = require('express');

const usersRouter = express.Router();
const usersController = require('../../controllers/users');
const userValidator = require('../../validators/users');
const expressHandler = require('../../middlewares/express-handler');
const { adminAuth, auth } = require('../../middlewares/jwt-auth');

usersRouter.post('/', userValidator.create, expressHandler(usersController.create));

usersRouter.get('/', userValidator.findAll, auth, expressHandler(usersController.findAll));

usersRouter.get('/:id', userValidator.findById, auth, expressHandler(usersController.findById));

usersRouter.post('/login', userValidator.login, expressHandler(usersController.login));

usersRouter.delete('/:id', userValidator.remove, adminAuth, expressHandler(usersController.remove));

usersRouter.put(
	'/reset-user-password',
	userValidator.resetPassword,
	expressHandler(usersController.resetPassword)
);

usersRouter.put('/:id', userValidator.update, auth, expressHandler(usersController.update));

usersRouter.post(
	'/create-reset-token',
	userValidator.createResetToken,
	expressHandler(usersController.createResetToken)
);

module.exports = usersRouter;
