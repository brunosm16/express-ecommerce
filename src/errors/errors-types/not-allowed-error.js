const { NOT_ALLOWED_ERROR } = require('../../constants/messages/errors');

class NotAllowedError extends Error {
	constructor(message = NOT_ALLOWED_ERROR) {
		super(message);
		this.name = 'NotAllowedError';
	}
}

module.exports = NotAllowedError;
