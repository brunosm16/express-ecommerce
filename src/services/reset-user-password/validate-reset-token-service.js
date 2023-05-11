const { VALID_TOKEN_EXISTS } = require('../../constants/error-messages');
const { EntityExistsError } = require('../../errors/errors-types');

const validateTokenDate = (isoDate) => {
	const tokenTime = new Date(isoDate).getTime();
	const currentTime = new Date().getTime();
	const isValid = tokenTime > currentTime;

	if (isValid) throw new EntityExistsError(VALID_TOKEN_EXISTS);
};

const validateTokenExists = (token, isoDate) => {
	if (!token || !isoDate) return;

	validateTokenDate(isoDate);
};

module.exports = {
	validateTokenExists,
};
