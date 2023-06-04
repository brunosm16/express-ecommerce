const { EMPTY_BODY } = require('../../constants/error-messages');
const BadRequestError = require('./bad-request-error');

class EmptyBodyError extends BadRequestError {
	constructor(message = EMPTY_BODY) {
		super(message);
		this.name = 'EmptyBodyError';
		this.message = message;
	}
}

module.exports = EmptyBodyError;
