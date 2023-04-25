const { EntityExistsError } = require('../errors/entity-exists-error');
const { NotFoundError } = require('../errors/not-found-error');

const sendResponse = (res, statusCode, message) => res.status(statusCode).json({ message });

const makeOkResponse = (res, message) => sendResponse(res, 200, message);
const makeBadRequestResponse = (res, message) => sendResponse(res, 400, message);
const makeInternalServerErrorResponse = (res, message) => sendResponse(res, 500, message);

const makeResponseByError = (res, err) => {
	const { message } = err;

	if (err instanceof EntityExistsError || err instanceof NotFoundError) {
		return makeBadRequestResponse(res, message);
	}

	return makeInternalServerErrorResponse(res, message);
};

module.exports = {
	makeOkResponse,
	makeBadRequestResponse,
	makeInternalServerErrorResponse,
	makeResponseByError,
};
