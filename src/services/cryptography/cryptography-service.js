const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const { PASSWORD_SALT, TOKEN_EXPIRATION } = require('../../constants/cryptography');
const { JWT_SECRET } = require('../../env/env-values');

const encrypt = async (plaintext) => {
	return bcrypt.hash(plaintext, PASSWORD_SALT);
};

const generateUUID = () => {
	return crypto.randomUUID();
};

const generateTokenByParams = (payload) => {
	return jwt.sign({ payload }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
};

const comparePasswords = async (password, hashPassword) => {
	return bcrypt.compare(password, hashPassword);
};

module.exports = {
	encrypt,
	generateTokenByParams,
	generateUUID,
	comparePasswords,
};
