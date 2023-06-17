const { ENTITY_NOT_FOUND_ERROR } = require('../../constants/messages/errors');
const NotFoundError = require('./base/not-found-error');

class EntityNotExistsError extends NotFoundError {
	constructor(message = ENTITY_NOT_FOUND_ERROR) {
		super(message);
		this.name = 'EntityNotExistsError';
		this.message = message;
	}
}

module.exports = EntityNotExistsError;
