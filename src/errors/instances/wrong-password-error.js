const { WRONG_PASSWORD } = require('../../constants/error-messages');
const UnauthorizedError = require('./unauthorized-error');

class WrongPasswordError extends UnauthorizedError {
	constructor(message = WRONG_PASSWORD) {
		super(message);
		this.name = 'WrongPasswordError';
	}
}

module.exports = WrongPasswordError;
