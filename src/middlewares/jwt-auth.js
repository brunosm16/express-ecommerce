const {
	REQUIRED_AUTHORIZATION_ERROR,
	INVALID_TOKEN_CREDENTIAL,
	NOT_ALLOWED,
} = require('../constants/error-messages');
const { makeBadRequest, makeInternalServerError } = require('../errors/errors-factory');
const { decodeToken } = require('../services/cryptography/cryptography-service');
const { sendExpressResponse } = require('../utils/send-express-response');

const authIsNotBearer = (authorization) => {
	const split = authorization.split(' ');

	if (split.length !== 2 && split[0] !== 'Bearer') return true;

	return false;
};

const getAuthError = (authorization) => {
	if (!authorization) return makeBadRequest(REQUIRED_AUTHORIZATION_ERROR);

	if (authIsNotBearer(authorization)) return makeBadRequest(INVALID_TOKEN_CREDENTIAL);

	return null;
};

const getBearerTokenDecoded = (authorization) => {
	const bearerToken = authorization.split(' ')[1];
	return decodeToken(bearerToken);
};

const adminAuth = async (req, res, next) => {
	const { authorization } = req.headers;
	const authError = getAuthError(authorization);
	if (authError) return sendExpressResponse(res, authError);

	try {
		const { admin } = getBearerTokenDecoded(authorization);

		if (!admin) sendExpressResponse(res, makeBadRequest(NOT_ALLOWED));

		return next();
	} catch (err) {
		return sendExpressResponse(res, makeInternalServerError(err?.message));
	}
};

const auth = async (req, res, next) => {
	const { authorization } = req.headers;
	const authError = getAuthError(authorization);
	if (authError) return sendExpressResponse(res, authError);

	try {
		const { admin } = getBearerTokenDecoded();
		req.isAdmin = admin;
		return next();
	} catch (err) {
		return sendExpressResponse(res, makeBadRequest(INVALID_TOKEN_CREDENTIAL));
	}
};

module.exports = { auth, adminAuth };
