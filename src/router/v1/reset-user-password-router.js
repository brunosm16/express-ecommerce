const express = require('express');

const resetUserPasswordValidator = require('../../validators/reset-user-password');
const resetUserPasswordController = require('../../controllers/reset-user-password');

const resetUserPasswordRouter = express.Router();

resetUserPasswordRouter.post(
	'/',
	resetUserPasswordValidator.createToken,
	resetUserPasswordController.createResetToken
);

module.exports = resetUserPasswordRouter;
