const InternalServerError = require('./internal-server-error');
const NotFoundError = require('./not-found-error');
const EntityExistsError = require('./entity-exists-error');
const InvalidCredentialsError = require('./invalid-credentials-error');
const RequiredFieldError = require('./required-field-error');
const NotAllowedError = require('./not-allowed-error');

module.exports = {
	InternalServerError,
	NotFoundError,
	EntityExistsError,
	InvalidCredentialsError,
	RequiredFieldError,
	NotAllowedError,
};
