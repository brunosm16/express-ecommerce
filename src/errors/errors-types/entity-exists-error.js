const { ENTITY_EXISTS_ERROR } = require('../../constants/messages/errors');

class EntityExistsError extends Error {
	constructor(message = ENTITY_EXISTS_ERROR) {
		super(message);
		this.name = 'EntityExistsError';
	}
}

module.exports = EntityExistsError;
