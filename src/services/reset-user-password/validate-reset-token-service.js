const { VALID_TOKEN_EXISTS, INVALID_TOKEN_CREDENTIAL } = require('../../constants/error-messages');
const {
	EntityExistsError,
	InvalidCredentialsError,
	EntityNotExistsError,
} = require('../../errors/errors-types');

const validateTokenDate = (isoDate) => {
	const tokenTime = new Date(isoDate).getTime();
	const currentTime = new Date().getTime();
	const isValid = tokenTime > currentTime;

	if (isValid) throw new EntityExistsError(VALID_TOKEN_EXISTS);
};

const validateTokenExists = (token, isoDate) => {
	if (!token || !isoDate) return;

	validateTokenDate(isoDate);
};

const validateResetToken = async (inputToken, user) => {
	if (!user) throw new EntityNotExistsError('User not found');

	const { reset_password_token, reset_password_expire_dates } = user;

	if (inputToken !== reset_password_token) {
		throw new InvalidCredentialsError(INVALID_TOKEN_CREDENTIAL);
	}

	validateTokenDate(reset_password_expire_dates);
};

module.exports = {
	validateTokenExists,
	validateResetToken,
};
