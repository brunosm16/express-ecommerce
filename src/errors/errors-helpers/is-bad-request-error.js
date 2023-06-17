const { NotFoundError, EntityExistsError, EntityNotExistsError } = require('../instances');

const badRequestErrorsInstances = [EntityExistsError, NotFoundError, EntityNotExistsError];

const badRequestErrorsTypes = ['TokenExpiredError'];

const isBadRequestError = (err) => {
	const hasErrorInstance = badRequestErrorsInstances.some(
		(errorInstance) => err instanceof errorInstance
	);

	const hasErrorType = badRequestErrorsTypes.some((errorType) => err?.stack.includes(errorType));

	return hasErrorInstance || hasErrorType;
};

module.exports = { isBadRequestError };
