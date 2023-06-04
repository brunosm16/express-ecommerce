const { REQUIRED_FIELD } = require('../../constants/error-messages');
const BadRequestError = require('./bad-request-error');

class RequiredFieldError extends BadRequestError {
	constructor(message = REQUIRED_FIELD) {
		super(message);
		this.name = 'RequiredFieldError';
		this.message = message;
	}
}

module.exports = RequiredFieldError;
