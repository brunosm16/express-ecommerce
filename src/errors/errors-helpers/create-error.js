const { STATUS_CODE_400, STATUS_CODE_500 } = require('../../constants/http-status-codes');
const { isBadRequestError } = require('./index');

const makeHttpResponse = (statusCode, message) => ({ statusCode, message });

const makeBadRequestMessage = (message) => makeHttpResponse(STATUS_CODE_400, message);

const makeInternalServerErrorMessage = (message) => makeHttpResponse(STATUS_CODE_500, message);

const createError = (err) => {
	const { message } = err;

	if (isBadRequestError(err)) {
		return makeBadRequestMessage(message);
	}

	return makeInternalServerErrorMessage(err?.message);
};

module.exports = { createError };
