const { NOT_ALLOWED } = require('../constants/error-messages');

class NotAllowedError extends Error {
	constructor(message = NOT_ALLOWED) {
		super(message);
		this.name = 'NotAllowedError';
	}
}

module.exports = { NotAllowedError };
