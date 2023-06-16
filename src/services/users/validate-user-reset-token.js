const { INVALID_TOKEN_CREDENTIAL } = require('../../constants/error-messages');
const { InvalidCredentialsError, EntityNotExistsError } = require('../../errors/errors-types');
const { CredentialsError } = require('../../errors/instances');
const { makeEntityNotFoundMessage } = require('../../errors/messages/make-error-messages');

const tokenExpired = (isoDate) => {
	const tokenTime = new Date(isoDate).getTime();
	const currentTime = new Date().getTime();
	return currentTime > tokenTime;
};

const validateInputResetToken = async (inputToken, user) => {
	if (!user) throw new EntityNotExistsError(makeEntityNotFoundMessage('User'));

	const { token_reset_password: userToken, token_reset_password_expire_date } = user;

	if (inputToken !== userToken) throw new InvalidCredentialsError(INVALID_TOKEN_CREDENTIAL);

	if (tokenExpired(token_reset_password_expire_date)) throw new CredentialsError('Token expired');
};

module.exports = {
	validateInputResetToken,
	tokenExpired,
};
