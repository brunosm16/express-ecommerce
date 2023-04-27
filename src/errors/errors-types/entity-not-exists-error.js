const { ENTITY_NOT_EXISTS } = require('../../constants/error-messages');

class EntityNotExistsError extends Error {
	constructor(message = ENTITY_NOT_EXISTS) {
		super(message);
		this.name = 'EntityNotExistsError';
	}
}

module.exports = EntityNotExistsError;
