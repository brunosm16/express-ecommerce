const { SOMETHING_WRONG, ENTITY_DELETED } = require('../constants/error-messages');
const {
	STATUS_CODE_200,
	STATUS_CODE_400,
	STATUS_CODE_500,
} = require('../constants/http-status-codes');

const { createErrorMessage } = require('../errors/errors-helpers');

const sendResponse = (res, statusCode, message) => res.status(statusCode).json({ message });
const makeOkResponse = (res, message) => sendResponse(res, STATUS_CODE_200, message);
const makeBadRequestResponse = (res, message) => sendResponse(res, STATUS_CODE_400, message);
const makeInternalServerErrorResponse = (res, message) =>
	sendResponse(res, STATUS_CODE_500, message);

const makeDeleteResponse = (deletedCode, res) => {
	const OPERATION_ERROR_CODE = 0;
	const OPERATION_ERROR_SUCCESS = 1;

	const responsesByCode = {
		[OPERATION_ERROR_CODE]: (response) =>
			makeInternalServerErrorResponse(response, SOMETHING_WRONG),
		[OPERATION_ERROR_SUCCESS]: (response) => makeOkResponse(response, ENTITY_DELETED),
	};

	return responsesByCode[deletedCode](res);
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
};
