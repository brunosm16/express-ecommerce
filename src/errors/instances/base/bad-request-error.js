const { BAD_REQUEST } = require('../../../constants/error-messages');
const { STATUS_CODE_400 } = require('../../../constants/http-status-codes');

class BadRequestError extends Error {
	constructor(message = BAD_REQUEST) {
		super(message);
		this.message = message;
		this.statusCode = STATUS_CODE_400;
	}
}

module.exports = BadRequestError;
