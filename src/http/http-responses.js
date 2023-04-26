const {
	STATUS_CODE_200,
	STATUS_CODE_400,
	STATUS_CODE_500,
} = require('../constants/http-status-codes');
const { createError } = require('../errors/errors-helpers');

const sendResponse = (res, statusCode, message) => res.status(statusCode).json({ message });
const makeOkResponse = (res, message) => sendResponse(res, STATUS_CODE_200, message);
const makeBadRequestResponse = (res, message) => sendResponse(res, STATUS_CODE_400, message);
const makeInternalServerErrorResponse = (res, message) =>
	sendResponse(res, STATUS_CODE_500, message);

const makeResponseByError = (res, err) => {
	const { statusCode, message } = createError(err);

	return sendResponse(res, statusCode, message);
};

module.exports = {
	makeOkResponse,
	makeBadRequestResponse,
	makeInternalServerErrorResponse,
	makeResponseByError,
};
