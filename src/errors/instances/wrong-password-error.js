const { WRONG_PASSWORD_ERROR } = require('../../constants/messages/errors');
const UnauthorizedError = require('./base/unauthorized-error');

class WrongPasswordError extends UnauthorizedError {
	constructor(message = WRONG_PASSWORD_ERROR) {
		super(message);
		this.name = 'WrongPasswordError';
	}
}

module.exports = WrongPasswordError;
