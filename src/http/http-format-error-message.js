const { STATUS_CODE_400, STATUS_CODE_500 } = require('../constants/http-status-codes');
const {
	BadRequestError,
	InternalServerError,
	NotFoundError,
	UnauthorizedError,
} = require('../errors/instances');

const baseErrorInstances = [BadRequestError, InternalServerError, NotFoundError, UnauthorizedError];
const badRequestErrorsTypes = ['TokenExpiredError'];

const isDefinedErrorInstance = (err) =>
	baseErrorInstances.some((currentError) => err instanceof currentError);

const isBadRequestTypeError = (err) =>
	badRequestErrorsTypes.some((currentError) => err?.stack.includes(currentError));

const formatErrorMessage = (err) => {
	if (isDefinedErrorInstance(err)) {
		const { statusCode, message } = err;
		return { statusCode, message };
	}

	if (isBadRequestTypeError(err)) {
		return { statusCode: STATUS_CODE_400, message: err };
	}

	return { statusCode: STATUS_CODE_500, message: err?.message };
};

module.exports = { formatErrorMessage };
