const makeBadRequest = (message = 'Bad Request') => ({
	statusCode: 400,
	message,
});

const makeOkRequest = (message = '') => ({
	statusCode: 200,
	message,
});

const makeInternalServerError = (message = 'Internal Server Error') => ({
	statusCode: 500,
	message,
});

module.exports = {
	makeBadRequest,
	makeOkRequest,
	makeInternalServerError,
};
