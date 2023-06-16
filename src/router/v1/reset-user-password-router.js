const express = require('express');

const resetUserPasswordValidator = require('../../validators/reset-user-password');
const resetUserPasswordController = require('../../controllers/reset-user-password');

const resetUserPasswordRouter = express.Router();

resetUserPasswordRouter.put(
	'/',
	resetUserPasswordValidator.resetPassword,
	resetUserPasswordController.resetPassword
);

module.exports = resetUserPasswordRouter;
