const BadRequestError = require('./bad-request-error');
const CredentialsError = require('./credentials-error');
const EmptyBodyError = require('./empty-body-error');
const EntityExistsError = require('./entity-exists-error');
const EntityNotExistsError = require('./entity-not-exists-error');
const InternalServerError = require('./internal-server-error');
const NotFoundError = require('./not-found-error');
const RequiredFieldError = require('./required-field-error');
const UnauthorizedError = require('./unauthorized-error');
const WrongPasswordError = require('./wrong-password-error');

module.exports = {
	BadRequestError,
	CredentialsError,
	EmptyBodyError,
	EntityExistsError,
	EntityNotExistsError,
	InternalServerError,
	NotFoundError,
	RequiredFieldError,
	UnauthorizedError,
	WrongPasswordError,
};
