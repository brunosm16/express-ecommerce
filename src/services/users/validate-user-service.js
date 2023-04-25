const { TOKEN_ERROR } = require('../../constants/error-messages');
const { EntityExistsError, InternalServerError } = require('../../errors');
const findUserService = require('./find-user-service');

const validateUserExists = async ({ first_name, last_name, primary_email }) => {
	try {
		const user = await findUserService.findUserByParams(first_name, last_name, primary_email);
		if (user) throw new EntityExistsError();
	} catch (err) {
		throw new InternalServerError(err?.message);
	}
};

const validateToken = (token) => {
	if (!token) {
		throw new InternalServerError(TOKEN_ERROR);
	}
};

module.exports = { validateUserExists, validateToken };
