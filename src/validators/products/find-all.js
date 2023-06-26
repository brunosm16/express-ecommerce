const { celebrate } = require('celebrate');
const { authorization } = require('../base-validators');

module.exports = celebrate({
	...authorization.requiredAuthorizationHeader,
});
