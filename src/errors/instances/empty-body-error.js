const BadRequestError = require('./base/bad-request-error');

class EmptyBodyError extends BadRequestError {
	constructor(message = 'Empty Body Error') {
		super(message);
		this.name = 'EmptyBodyError';
		this.message = message;
	}
}

module.exports = EmptyBodyError;
