const { INTERNAL_SERVER_ERROR } = require('../constants/error-messages');
const { EntityExistsError, NotFoundError } = require('../errors');

const sendResponse = (res, statusCode, message) => res.status(statusCode).json({ message });

const makeOkResponse = (res, message) => sendResponse(res, 200, message);
const makeBadRequestResponse = (res, message) => sendResponse(res, 400, message);
const makeInternalServerErrorResponse = (res, message) => sendResponse(res, 500, message);

const isTypeError = (err) => err?.stack?.startsWith('TypeError');
const isTokenExpiredError = (err) => err?.name === 'TokenExpiredError';

const isBadRequestError = (err) => {
	const badRequestErrors = [EntityExistsError, NotFoundError];

	return badRequestErrors.some((errorType) => err instanceof errorType);
};

const makeResponseByError = (res, err) => {
	const { message } = err;

	if (isTypeError(err)) return makeInternalServerErrorResponse(res, INTERNAL_SERVER_ERROR);
	if (isTokenExpiredError) return makeBadRequestResponse(res, message);
	if (isBadRequestError(err)) return makeBadRequestResponse(res, message);

	return makeInternalServerErrorResponse(res, err?.message);
};

module.exports = {
	makeOkResponse,
	makeBadRequestResponse,
	makeInternalServerErrorResponse,
	makeResponseByError,
};
