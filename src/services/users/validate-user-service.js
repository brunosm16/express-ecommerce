const { TOKEN_ERROR } = require('../../constants/error-messages');
const {
	EntityExistsError,
	InternalServerError,
	EntityNotExistsError,
	WrongPasswordError,
} = require('../../errors/errors-types');
const { comparePasswords } = require('../cryptography/cryptography-service');
const findUserService = require('./find-user-service');

const validateUserExists = async ({ primary_email, secondary_email }) => {
	const user = await findUserService.findUserByParams(primary_email, secondary_email);
	if (user) throw new EntityExistsError();
};

const validateNonExistingUserById = async (id) => {
	const user = await findUserService.findUserById(id);
	if (!user) throw new EntityNotExistsError();
};

const validateToken = (token) => {
	if (!token) throw new InternalServerError(TOKEN_ERROR);
};

const validateUserExistsByEmail = async (email) => {
	const user = await findUserService.findUserByEmail(email);
	if (!user) throw new EntityNotExistsError('No user found with this email');
};

const validateInputPasswordWithHash = async (password, hash) => {
	const isEqual = await comparePasswords(password, hash);

	if (!isEqual) throw new WrongPasswordError();
};

module.exports = {
	validateUserExists,
	validateToken,
	validateNonExistingUserById,
	validateUserExistsByEmail,
	validateInputPasswordWithHash,
};
