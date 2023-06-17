const { ENTITY_NOT_FOUND_ERROR } = require('../../constants/messages/errors');

class EntityNotExistsError extends Error {
	constructor(message = ENTITY_NOT_FOUND_ERROR) {
		super(message);
		this.name = 'EntityNotExistsError';
	}
}

module.exports = EntityNotExistsError;
