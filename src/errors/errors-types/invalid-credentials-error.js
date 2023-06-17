const { INVALID_TOKEN_CREDENTIAL_ERROR } = require('../../constants/messages/errors');

class InvalidCredentialsError extends Error {
	constructor(message = INVALID_TOKEN_CREDENTIAL_ERROR) {
		super(message);
		this.name = 'InvalidCredentialsError';
	}
}

module.exports = InvalidCredentialsError;
