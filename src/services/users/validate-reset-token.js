const { VALID_TOKEN_EXISTS, INVALID_TOKEN_CREDENTIAL } = require('../../constants/error-messages');
const {
	EntityExistsError,
	InvalidCredentialsError,
	EntityNotExistsError,
} = require('../../errors/errors-types');
const { makeEntityNotFoundMessage } = require('../../errors/messages/make-error-messages');

const validateTokenDate = (isoDate) => {
	const tokenTime = new Date(isoDate).getTime();
	const currentTime = new Date().getTime();
	if (tokenTime > currentTime) throw new EntityExistsError(VALID_TOKEN_EXISTS);
};

const validateInputResetToken = async (inputToken, user) => {
	if (!user) throw new EntityNotExistsError(makeEntityNotFoundMessage('User'));

	const { reset_password_token: userToken, reset_password_expire_dates } = user;

	if (inputToken !== userToken) throw new InvalidCredentialsError(INVALID_TOKEN_CREDENTIAL);

	validateTokenDate(reset_password_expire_dates);
};

module.exports = {
	validateInputResetToken,
	validateTokenDate,
};
