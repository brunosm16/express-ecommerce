const { generateTokenByParams } = require('../cryptography/cryptography-service');
const { findUserByEmail } = require('./find-user-service');
const {
	validateUserExistsByEmail,
	validateInputPasswordWithHash,
} = require('./validate-user-service');

const createAccessToken = async ({ email, password }) => {
	await validateUserExistsByEmail(email);

	const { id, admin, password_hash } = await findUserByEmail(email);

	await validateInputPasswordWithHash(password, password_hash);

	return generateTokenByParams({ id, admin });
};

module.exports = { createAccessToken };
