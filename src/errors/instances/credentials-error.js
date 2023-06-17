const { INVALID_TOKEN_CREDENTIAL_ERROR } = require('../../constants/messages/errors');
const UnauthorizedError = require('./base/unauthorized-error');

class CredentialsError extends UnauthorizedError {
	constructor(message = INVALID_TOKEN_CREDENTIAL_ERROR) {
		super(message);
		this.name = 'CredentialsError';
		this.message = message;
	}
}

module.exports = CredentialsError;
