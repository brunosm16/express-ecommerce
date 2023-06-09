const { STATUS_CODE_500, STATUS_CODE_200 } = require('../constants/http-status-codes');
const { INTERNAL_SERVER_ERROR } = require('../constants/messages/errors');
const { OPERATION_SUCCEEDED } = require('../constants/messages/success');
const { TableResultCode } = require('../database/instances');
const { formatErrorMessage } = require('./http-format-error-message');
const { OPERATION_ERROR_CODE, OPERATION_SUCCESS_CODE } = require('./operation-errors-codes');

const sendResponse = (res, statusCode, message) => res.status(statusCode).json({ message });

const makeInternalServerErrorResponse = (res) =>
	sendResponse(res, STATUS_CODE_500, INTERNAL_SERVER_ERROR);

const makeOkResponse = (res, message) => sendResponse(res, STATUS_CODE_200, message);

const makeResponseByOperationCode = (res, { resultCode }) => {
	const responsesByCode = {
		[OPERATION_ERROR_CODE]: (response) => makeInternalServerErrorResponse(response),
		[OPERATION_SUCCESS_CODE]: (response) => makeOkResponse(response, OPERATION_SUCCEEDED),
	};

	return responsesByCode[resultCode](res);
};

const makeAPIResponseError = (res, err) => {
	const { statusCode, message } = formatErrorMessage(err);
	return sendResponse(res, statusCode, message);
};

const makeAPIResponse = (res, data) => {
	const dataIsOperationCode = data instanceof TableResultCode;
	if (dataIsOperationCode) return makeResponseByOperationCode(res, data);

	return makeOkResponse(res, data);
};

module.exports = {
	makeAPIResponse,
	makeAPIResponseError,
};
