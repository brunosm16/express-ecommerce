const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const {
	PASSWORD_SALT,
	TOKEN_EXPIRATION,
	RANDOM_CRYPTO_BYTES,
} = require('../../constants/cryptography');
const { JWT_SECRET } = require('../../env/env-values');
const { RESET_TOKEN_MINUTES_TO_EXPIRE } = require('../../constants/cryptography');
const { InternalServerError } = require('../../errors/instances');

const encrypt = async (plaintext) => {
	return bcrypt.hash(plaintext, PASSWORD_SALT);
};

const generateUUID = () => {
	return crypto.randomUUID();
};

const generateTokenByParams = (payload) => {
	const invalidKeys = Object.values(payload).some((value) => {
		if (typeof value === 'boolean') return false;
		return !value;
	});

	if (invalidKeys) throw new InternalServerError('Invalid keys to encrypt password');

	return jwt.sign({ ...payload }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
};

const generateTokenExpirationDate = () => {
	const current = new Date();

	current.setMinutes(current.getMinutes() + RESET_TOKEN_MINUTES_TO_EXPIRE);

	return current.toISOString();
};

const generateResetTokenById = async (id) => {
	const token = crypto.randomBytes(RANDOM_CRYPTO_BYTES).toString('hex');
	const hash = await bcrypt.hash(token, PASSWORD_SALT);
	const resetToken = `${hash}&=${id}`;
	return resetToken;
};

const comparePasswords = async (password, hashPassword) => {
	return bcrypt.compare(password, hashPassword);
};

const decodeToken = (token) => {
	return jwt.verify(token, JWT_SECRET);
};

module.exports = {
	encrypt,
	generateTokenByParams,
	generateUUID,
	comparePasswords,
	decodeToken,
	generateResetTokenById,
	generateTokenExpirationDate,
};
