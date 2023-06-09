const { STATUS_CODE_400, STATUS_CODE_500 } = require('../constants/http-status-codes');
const { BAD_REQUEST_ERROR } = require('../constants/messages/errors');
const requireBySourceAndDir = require('../utils/require-by-source-and-dir');

const badRequestErrorsTypes = ['TokenExpiredError'];

const isErrorInstance = (err, instances) =>
	Object.keys(instances).some((currentKey) => err instanceof instances[currentKey]);

const isBadRequestTypeError = (err) =>
	badRequestErrorsTypes.some((currentError) => err?.stack.includes(currentError));

const formatErrorMessage = (err) => {
	const errorInstances = requireBySourceAndDir(__dirname, '../errors/instances/base');

	if (isErrorInstance(err, errorInstances)) {
		const { statusCode, message } = err;
		return { statusCode, message };
	}

	if (isBadRequestTypeError(err)) {
		return { statusCode: STATUS_CODE_400, message: err ?? BAD_REQUEST_ERROR };
	}

	return { statusCode: STATUS_CODE_500, message: err?.message ?? BAD_REQUEST_ERROR };
};

module.exports = { formatErrorMessage };
