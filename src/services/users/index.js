const createUser = require('./create-user');
const findUser = require('./find-user');
const loginUser = require('./login-user');
const removeUser = require('./remove-user');
const validateUserService = require('./validate-user-service');
const updateUserService = require('./update-user-service');

module.exports = {
	createUser,
	findUser,
	loginUser,
	removeUser,
	validateUserService,
	updateUserService,
};
