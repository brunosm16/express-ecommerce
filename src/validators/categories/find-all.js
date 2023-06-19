const { celebrate } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');

module.exports = celebrate({
	...requiredAuthorizationHeader,
});
