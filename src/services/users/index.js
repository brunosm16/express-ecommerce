const createUser = require('./create-user');
const removeUser = require('./remove-user');
const findUser = require('./find-user');
const validateUserService = require('./validate-user-service');
const loginUserService = require('./login-user-service');
const updateUserService = require('./update-user-service');

module.exports = {
	createUser,
	removeUser,
	findUser,
	validateUserService,
	loginUserService,
	updateUserService,
};
