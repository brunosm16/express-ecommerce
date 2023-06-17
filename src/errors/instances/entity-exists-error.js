const { ENTITY_EXISTS_ERROR } = require('../../constants/messages/errors');
const BadRequestError = require('./base/bad-request-error');

class EntityExistsError extends BadRequestError {
	constructor(message = ENTITY_EXISTS_ERROR) {
		super(message);
		this.name = 'EntityExistsError';
		this.message = message;
	}
}

module.exports = EntityExistsError;
