const { UNAUTHORIZED } = require('../../../constants/error-messages');
const { STATUS_CODE_401 } = require('../../../constants/http-status-codes');

class UnauthorizedError extends Error {
	constructor(message = UNAUTHORIZED) {
		super(message);
		this.message = message;
		this.statusCode = STATUS_CODE_401;
	}
}

module.exports = UnauthorizedError;
