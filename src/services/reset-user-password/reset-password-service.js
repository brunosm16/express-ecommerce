const { EntityNotExistsError } = require('../../errors/errors-types');
const { findUserById } = require('../users/find-user-service');
const { getTokenData } = require('./find-token-data');
const validateResetTokenService = require('./validate-reset-token-service');
const cryptographyService = require('../cryptography/cryptography-service');

const getUser = async (id) => {
	const user = await findUserById(id);

	if (!user) {
		throw new EntityNotExistsError();
	}

	return user;
};

const updateUserPassword = async (user, password) => {
	const password_hash = await cryptographyService.encrypt(password);

	await user.update({
		...user,
		password_hash,
		reset_password_token: null,
		reset_password_expire_dates: null,
	});
};

const resetPassword = async (token, password) => {
	const { id } = getTokenData(token);

	const user = await getUser(id);

	await validateResetTokenService.validateResetToken(token, user);

	await updateUserPassword(user, password);

	return user;
};

module.exports = { resetPassword };
