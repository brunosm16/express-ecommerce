const {
	REQUIRED_AUTHORIZATION_ERROR,
	INVALID_TOKEN_CREDENTIAL,
} = require('../constants/error-messages');
const { makeBadRequest } = require('../errors/errors-factory');
const { decodeToken } = require('../services/cryptography/cryptography-service');
const { sendExpressResponse } = require('../utils/send-express-response');

const authIsNotBearer = (authorization) => {
	const split = authorization.split(' ');

	if (split.length !== 2 && split[0] !== 'Bearer') return true;

	return false;
};

const getAuthError = (authorization) => {
	if (!authorization) return makeBadRequest(REQUIRED_AUTHORIZATION_ERROR);

	if (authIsNotBearer) return makeBadRequest(INVALID_TOKEN_CREDENTIAL);

	return null;
};

const auth = async (req, res, next) => {
	const { authorization } = req.headers;
	const authError = getAuthError(authorization);
	if (authError) return sendExpressResponse(res, authError);

	try {
		const [bearerToken] = authorization.split(' ');
		const { admin } = decodeToken(bearerToken);

		req.isAdmin = admin;

		return next();
	} catch (err) {
		return sendExpressResponse(res, makeBadRequest(INVALID_TOKEN_CREDENTIAL));
	}
};

module.exports = { auth };
