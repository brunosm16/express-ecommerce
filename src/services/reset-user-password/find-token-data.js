const { INVALID_TOKEN_CREDENTIAL } = require('../../constants/error-messages');
const { InvalidCredentialsError } = require('../../errors/errors-types');

const getTokenData = (inputToken) => {
	if (!inputToken) throw new InvalidCredentialsError(INVALID_TOKEN_CREDENTIAL);

	const [tokenHash, id] = inputToken.split('&=');

	if (!tokenHash || !id) throw new InvalidCredentialsError(INVALID_TOKEN_CREDENTIAL);

	return {
		tokenHash,
		id,
	};
};

module.exports = { getTokenData };
