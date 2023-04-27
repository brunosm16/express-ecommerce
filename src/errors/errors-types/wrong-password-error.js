const { WRONG_PASSWORD } = require('../../constants/error-messages');

class WrongPasswordError extends Error {
	constructor(message = WRONG_PASSWORD) {
		super(message);
		this.name = 'WrongPasswordError';
	}
}

module.exports = WrongPasswordError;
