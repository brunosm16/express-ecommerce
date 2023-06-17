const { BAD_REQUEST_ERROR } = require('../../constants/messages/errors');

class BadRequestError extends Error {
	constructor(message = BAD_REQUEST_ERROR) {
		super(message);
		this.message = message;
	}
}

module.exports = BadRequestError;
