const { BAD_REQUEST } = require('../../constants/error-messages');

class BadRequestError extends Error {
	constructor(message = BAD_REQUEST) {
		super(message);
		this.message = message;
	}
}

module.exports = BadRequestError;
