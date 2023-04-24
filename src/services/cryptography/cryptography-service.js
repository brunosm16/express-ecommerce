const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { PASSWORD_SALT, TOKEN_EXPIRATION } = require('../../constants/cryptography');
const { JWT_SECRET } = require('../../env/env-values');

const encrypt = (plaintext) => {
	return bcrypt.hash(plaintext, PASSWORD_SALT);
};

const generateTokenByParams = (payload) => {
	return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
};

module.exports = {
	encrypt,
	generateTokenByParams,
};
