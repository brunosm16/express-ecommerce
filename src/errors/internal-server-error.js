class InternalServerError extends Error {
	constructor(message) {
		super(message);
		this.name = 'InternalServerError';
	}
}

module.exports = { InternalServerError };
