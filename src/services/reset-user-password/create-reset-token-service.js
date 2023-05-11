const { RESET_TOKEN_MINUTES_TO_EXPIRE } = require('../../constants/cryptography');
const { EntityNotExistsError } = require('../../errors/errors-types');
const {
	generateResetTokenById,
	generateTokenExpirationDate,
} = require('../cryptography/cryptography-service');
const { findUserByEmail } = require('../users/find-user-service');

const getUser = async (email) => {
	const user = await findUserByEmail(email);
	if (!user) throw new EntityNotExistsError('No user found with this email');

	return user;
};

const generateTokenData = async ({ id }) => {
	const token = await generateResetTokenById(id, RESET_TOKEN_MINUTES_TO_EXPIRE);
	return {
		token,
		expirationDate: generateTokenExpirationDate(),
	};
};

const persistUserToken = async (user, token, expirationDate) => {
	await user.update({
		...user,
		reset_password_token: token,
		reset_password_expire_date: expirationDate,
	});
};

const createResetToken = async ({ email }) => {
	const user = await getUser(email);
	const { token, expirationDate } = await generateTokenData(user);
	await persistUserToken(user, token, expirationDate);

	return token;
};

module.exports = { createResetToken };
