const { TOKEN_ERROR } = require('../../constants/error-messages');
const { EntityExistsError, InternalServerError } = require('../../errors/errors-types');
const findUserService = require('./find-user-service');

const validateUserExists = async ({ first_name, last_name, primary_email }) => {
	const user = await findUserService.findUserByParams(first_name, last_name, primary_email);
	if (user) throw new EntityExistsError();
};

const validateToken = (token) => {
	if (!token) throw new InternalServerError(TOKEN_ERROR);
};

module.exports = { validateUserExists, validateToken };
