const { celebrate } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');
const { requiredIdParams } = require('../base-validators/params');
const { requiredUserIdBody } = require('../base-validators/body');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	...requiredIdParams,
	...requiredUserIdBody,
});
