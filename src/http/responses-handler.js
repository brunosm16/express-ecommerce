const { SOMETHING_WRONG, OPERATION_SUCCEEDED } = require('../constants/error-messages');
const { STATUS_CODE_500, STATUS_CODE_200 } = require('../constants/http-status-codes');
const ParanoidTableOperation = require('../database/instances/paranoid-table-operation');
const { formatErrorMessage } = require('./http-format-error-message');
const { OPERATION_ERROR_CODE, OPERATION_SUCCESS_CODE } = require('./operation-errors-codes');

const sendResponse = (res, statusCode, message) => res.status(statusCode).json({ message });

const makeInternalServerErrorResponse = (res, message) =>
	sendResponse(res, STATUS_CODE_500, message);

const makeOkResponse = (res, message) => sendResponse(res, STATUS_CODE_200, message);

const makeResponseByOperationCode = (res, { operationCode }) => {
	const responsesByCode = {
		[OPERATION_ERROR_CODE]: (response) =>
			makeInternalServerErrorResponse(response, SOMETHING_WRONG),
		[OPERATION_SUCCESS_CODE]: (response) => makeOkResponse(response, OPERATION_SUCCEEDED),
	};

	return responsesByCode[operationCode](res);
};

const makeAPIResponseError = (res, err) => {
	const { statusCode, message } = formatErrorMessage(err);
	return sendResponse(res, statusCode, message);
};

const makeAPIResponse = (res, data) => {
	const dataIsOperationCode = data instanceof ParanoidTableOperation;
	if (dataIsOperationCode) return makeResponseByOperationCode(res, data);

	return makeOkResponse(res, data);
};

module.exports = {
	makeAPIResponse,
	makeAPIResponseError,
};