const { SOMETHING_WRONG, OPERATION_SUCCEEDED } = require('../constants/error-messages');
const { STATUS_CODE_500, STATUS_CODE_200 } = require('../constants/http-status-codes');
const { formatErrorMessage } = require('./http-format-error-message');
const { OPERATION_ERROR_CODE, OPERATION_SUCCESS_CODE } = require('./operation-errors-codes');

const sendResponse = (res, statusCode, message) => res.status(statusCode).json({ message });

const makeInternalServerErrorResponse = (res, message) =>
	sendResponse(res, STATUS_CODE_500, message);

const makeOkResponse = (res, message) => sendResponse(res, STATUS_CODE_200, message);

const makeResponseByOperationCode = (code, res) => {
	const responsesByCode = {
		[OPERATION_ERROR_CODE]: (response) =>
			makeInternalServerErrorResponse(response, SOMETHING_WRONG),
		[OPERATION_SUCCESS_CODE]: (response) => makeOkResponse(response, OPERATION_SUCCEEDED),
	};

	return responsesByCode[code](res);
};

const makeAPIResponseError = (res, err) => {
	const { statusCode, message } = formatErrorMessage(err);
	return sendResponse(res, statusCode, message);
};

const makeAPIResponse = (res, data) => {
	const dataIsOperationCode = Number.isInteger(data) && (data >= 0 || data <= 1);
	if (dataIsOperationCode) return makeResponseByOperationCode(res, data);

	return makeOkResponse(res, data);
};

module.exports = {
	makeAPIResponse,
	makeAPIResponseError,
};
