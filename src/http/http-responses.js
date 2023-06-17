const {
	STATUS_CODE_200,
	STATUS_CODE_400,
	STATUS_CODE_500,
} = require('../constants/http-status-codes');
const { INTERNAL_SERVER_ERROR } = require('../constants/messages/errors');
const { OPERATION_SUCCEEDED } = require('../constants/messages/success');

const { createErrorMessage } = require('../errors/errors-helpers');

const sendResponse = (res, statusCode, message) => res.status(statusCode).json({ message });
const makeOkResponse = (res, message) => sendResponse(res, STATUS_CODE_200, message);
const makeBadRequestResponse = (res, message) => sendResponse(res, STATUS_CODE_400, message);
const makeInternalServerErrorResponse = (res) =>
	sendResponse(res, STATUS_CODE_500, INTERNAL_SERVER_ERROR);

const makeDeleteResponse = (deletedCode, res) => {
	const OPERATION_ERROR_CODE = 0;
	const OPERATION_ERROR_SUCCESS = 1;

	const responsesByCode = {
		[OPERATION_ERROR_CODE]: (response) => makeInternalServerErrorResponse(response),
		[OPERATION_ERROR_SUCCESS]: (response) => makeOkResponse(response, OPERATION_SUCCEEDED),
	};

	return responsesByCode[deletedCode](res);
};

const makeResponseByOperationCode = (code, message, res) => {
	const OPERATION_ERROR_CODE = 0;
	const OPERATION_ERROR_SUCCESS = 1;

	const responsesByCode = {
		[OPERATION_ERROR_CODE]: (response) => makeInternalServerErrorResponse(response),
		[OPERATION_ERROR_SUCCESS]: (response) => makeOkResponse(response, message),
	};

	return responsesByCode[code](res);
};

const makeResponseByError = (res, err) => {
	const { statusCode, message } = createErrorMessage(err);

	return sendResponse(res, statusCode, message);
};

module.exports = {
	makeOkResponse,
	makeBadRequestResponse,
	makeInternalServerErrorResponse,
	makeResponseByError,
	makeDeleteResponse,
	makeResponseByOperationCode,
};
