const { ENTITY_EXISTS } = require('../../constants/error-messages');
const BadRequestError = require('./bad-request-error');

class EntityExistsError extends BadRequestError {
	constructor(message = ENTITY_EXISTS) {
		super(message);
		this.name = 'EntityExistsError';
		this.message = message;
	}
}

module.exports = EntityExistsError;
