const BadRequestError = require('./base/bad-request-error');
const CredentialsError = require('./credentials-error');
const EmptyBodyError = require('./empty-body-error');
const EntityExistsError = require('./entity-exists-error');
const EntityNotExistsError = require('./entity-not-exists-error');
const InternalServerError = require('./base/internal-server-error');
const NotFoundError = require('./base/not-found-error');
const RequiredFieldError = require('./required-field-error');
const UnauthorizedError = require('./base/unauthorized-error');
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
