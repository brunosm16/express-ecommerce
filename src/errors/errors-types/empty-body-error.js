class EmptyBodyError extends Error {
	constructor(message = 'Empty Body Error') {
		super(message);
		this.name = 'EmptyBodyError';
	}
}

module.exports = EmptyBodyError;
