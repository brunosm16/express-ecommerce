const { STATUS_CODE_400 } = require('../../../constants/http-status-codes');
const { BAD_REQUEST_ERROR } = require('../../../constants/messages/errors');

class BadRequestError extends Error {
	constructor(message = BAD_REQUEST_ERROR) {
		super(message);
		this.message = message;
		this.statusCode = STATUS_CODE_400;
	}
}

module.exports = BadRequestError;
