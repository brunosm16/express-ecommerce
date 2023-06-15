const createUser = require('./create-user');
const removeUser = require('./remove-user');
const findUserService = require('./find-user-service');
const validateUserService = require('./validate-user-service');
const loginUserService = require('./login-user-service');
const updateUserService = require('./update-user-service');

module.exports = {
	createUser,
	removeUser,
	findUserService,
	validateUserService,
	loginUserService,
	updateUserService,
};
