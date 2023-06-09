const { ENTITY_NOT_EXISTS } = require('../../constants/error-messages');
const NotFoundError = require('./base/not-found-error');

class EntityNotExistsError extends NotFoundError {
	constructor(message = ENTITY_NOT_EXISTS) {
		super(message);
		this.name = 'EntityNotExistsError';
		this.message = message;
	}
}

module.exports = EntityNotExistsError;
