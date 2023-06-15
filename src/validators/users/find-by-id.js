const { celebrate } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');
const { requiredIdParams } = require('../base-validators/params');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	...requiredIdParams,
});
