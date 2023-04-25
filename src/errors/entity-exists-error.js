const { ENTITY_EXISTS } = require('../constants/error-messages');

class EntityExistsError extends Error {
	constructor(message = ENTITY_EXISTS) {
		super(message);
		this.name = 'EntityExistsError';
	}
}

module.exports = EntityExistsError;
