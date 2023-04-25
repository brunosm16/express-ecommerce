const { INVALID_TOKEN_CREDENTIAL } = require('../constants/error-messages');

class InvalidCredentialsError extends Error {
	constructor(message = INVALID_TOKEN_CREDENTIAL) {
		super(message);
		this.name = 'InvalidCredentialsError';
	}
}

module.exports = { InvalidCredentialsError };
