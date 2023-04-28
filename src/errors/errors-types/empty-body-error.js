const { EMPTY_BODY } = require('../../constants/error-messages');

class EmptyBodyError extends Error {
	constructor(message = EMPTY_BODY) {
		super(message);
		this.name = 'EmptyBodyError';
	}
}

module.exports = EmptyBodyError;
