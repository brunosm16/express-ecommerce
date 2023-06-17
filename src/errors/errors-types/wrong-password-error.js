const { WRONG_PASSWORD_ERROR } = require('../../constants/messages/errors');

class WrongPasswordError extends Error {
	constructor(message = WRONG_PASSWORD_ERROR) {
		super(message);
		this.name = 'WrongPasswordError';
	}
}

module.exports = WrongPasswordError;
