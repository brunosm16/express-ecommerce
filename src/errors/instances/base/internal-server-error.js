const { INTERNAL_SERVER_ERROR } = require('../../../constants/error-messages');
const { STATUS_CODE_500 } = require('../../../constants/http-status-codes');

class InternalServerError extends Error {
	constructor(message = INTERNAL_SERVER_ERROR) {
		super(message);
		this.name = 'InternalServerError';
		this.message = message;
		this.statusCode = STATUS_CODE_500;
	}
}

module.exports = InternalServerError;
