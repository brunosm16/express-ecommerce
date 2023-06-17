const { InvalidConnectionError } = require('sequelize');
const { INVALID_TOKEN_CREDENTIAL_ERROR } = require('../../constants/messages/errors');
const { RequiredFieldError } = require('../../errors/instances');

const authorizationIsNotBearer = (authorization) => {
	const split = authorization.split(' ');

	if (split.length !== 2 && split[0] !== 'Bearer') return true;

	return false;
};

const validateAuthorization = (authorization) => {
	if (!authorization) throw new RequiredFieldError('Authorization is a required field');

	if (authorizationIsNotBearer(authorization))
		throw new InvalidConnectionError(INVALID_TOKEN_CREDENTIAL_ERROR);
};

module.exports = { validateAuthorization };
