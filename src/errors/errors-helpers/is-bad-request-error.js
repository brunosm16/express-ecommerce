const { NotFoundError, EntityExistsError } = require('../errors-types');

const badRequestErrorsInstances = [EntityExistsError, NotFoundError];

const badRequestErrorsTypes = ['TokenExpiredError'];

const isBadRequestError = (err) => {
	const hasErrorInstance = badRequestErrorsInstances.some(
		(errorInstance) => err instanceof errorInstance
	);

	const hasErrorType = badRequestErrorsTypes.some((errorType) => err?.stack.includes(errorType));

	return hasErrorInstance || hasErrorType;
};

module.exports = { isBadRequestError };
