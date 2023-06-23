const { celebrate } = require('celebrate');
const { authorization, params } = require('../base-validators');

module.exports = celebrate({
	...authorization.requiredAuthorizationHeader,
	...params.requiredIdParams,
});
