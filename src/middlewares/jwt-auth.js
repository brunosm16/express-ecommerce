const { NotAllowedError } = require('../errors/errors-types');
const { makeResponseByError } = require('../http/http-responses');
const { validateAuthorization } = require('../services/auth/auth-service');
const { decodeToken } = require('../services/cryptography/cryptography-service');

const getBearerTokenDecoded = (authorization) => {
	const bearerToken = authorization.split(' ')[1];
	return decodeToken(bearerToken);
};

const adminAuth = async (req, res, next) => {
	try {
		const { authorization } = req.headers;

		validateAuthorization(authorization);

		const { admin } = getBearerTokenDecoded(authorization);

		if (!admin) throw new NotAllowedError();

		return next();
	} catch (err) {
		return makeResponseByError(res, err);
	}
};

const auth = async (req, res, next) => {
	try {
		const { authorization } = req.headers;

		validateAuthorization(authorization);

		const { admin } = getBearerTokenDecoded(authorization);
		req.isAdmin = admin;
		return next();
	} catch (err) {
		return makeResponseByError(res, err);
	}
};

module.exports = { auth, adminAuth };
