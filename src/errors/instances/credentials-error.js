const { INVALID_TOKEN_CREDENTIAL } = require('../../constants/error-messages');
const UnauthorizedError = require('./unauthorized-error');

class CredentialsError extends UnauthorizedError {
	constructor(message = INVALID_TOKEN_CREDENTIAL) {
		super(message);
		this.name = 'CredentialsError';
		this.message = message;
	}
}

module.exports = CredentialsError;
