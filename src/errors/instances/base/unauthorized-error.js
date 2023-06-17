const { NOT_ALLOWED_ERROR } = require('../../../constants/messages/errors');
const { STATUS_CODE_401 } = require('../../../constants/http-status-codes');

class UnauthorizedError extends Error {
	constructor(message = NOT_ALLOWED_ERROR) {
		super(message);
		this.message = message;
		this.statusCode = STATUS_CODE_401;
	}
}

module.exports = UnauthorizedError;
