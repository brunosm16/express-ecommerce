const { NOT_FOUND_ERROR } = require('../../../constants/messages/errors');
const { STATUS_CODE_404 } = require('../../../constants/http-status-codes');

class NotFoundError extends Error {
	constructor(message = NOT_FOUND_ERROR) {
		super(message);
		this.name = 'NotFoundError';
		this.message = message;
		this.statusCode = STATUS_CODE_404;
	}
}

module.exports = NotFoundError;
