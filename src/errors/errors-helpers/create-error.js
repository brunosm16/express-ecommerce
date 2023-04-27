const { STATUS_CODE_400, STATUS_CODE_500 } = require('../../constants/http-status-codes');
const { isBadRequestError } = require('./is-bad-request-error');

const makeHttpResponse = (statusCode, message) => ({ statusCode, message });

const makeBadRequestMessage = (message) => makeHttpResponse(STATUS_CODE_400, message);

const makeInternalServerErrorMessage = (message) => makeHttpResponse(STATUS_CODE_500, message);

const createErrorMessage = (err) => {
	const message = err?.message || err;

	if (isBadRequestError(err)) {
		return makeBadRequestMessage(message);
	}

	return makeInternalServerErrorMessage(err?.message);
};

module.exports = { createErrorMessage };
