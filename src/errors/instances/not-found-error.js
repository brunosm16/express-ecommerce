const { NOT_FOUND } = require('../../constants/error-messages');
const { STATUS_CODE_404 } = require('../../constants/http-status-codes');

class NotFoundError extends Error {
	constructor(message = NOT_FOUND) {
		super(message);
		this.name = 'NotFoundError';
		this.message = message;
		this.statusCode = STATUS_CODE_404;
	}
}

module.exports = NotFoundError;
