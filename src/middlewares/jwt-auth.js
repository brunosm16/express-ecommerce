const { UnauthorizedError } = require('../errors/instances');
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

		const { admin, is_admin } = getBearerTokenDecoded(authorization);

		if (!admin && !is_admin) throw new UnauthorizedError();

		return next();
	} catch (err) {
		return makeResponseByError(res, err);
	}
};

const auth = async (req, res, next) => {
	try {
		const { authorization } = req.headers;

		validateAuthorization(authorization);

		const { admin, id } = getBearerTokenDecoded(authorization);
		req.is_admin = admin;
		req.tokenId = id;
		return next();
	} catch (err) {
		return makeResponseByError(res, err);
	}
};

module.exports = { auth, adminAuth };
