const BadRequestError = require('./base/bad-request-error');

class RequiredFieldError extends BadRequestError {
	constructor(message = 'RequiredFieldError') {
		super(message);
		this.name = 'RequiredFieldError';
		this.message = message;
	}
}

module.exports = RequiredFieldError;
