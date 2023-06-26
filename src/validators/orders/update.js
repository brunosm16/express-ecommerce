const { celebrate, Joi, Segments } = require('celebrate');
const { authorization, params } = require('../base-validators');
const { statusEnums } = require('../../constants/enums/order-status');

module.exports = celebrate({
	...authorization.requiredAuthorizationHeader,
	...params.requiredIdParams,
	[Segments.BODY]: Joi.object().keys({
		status: Joi.string()
			.valid(...statusEnums)
			.optional(),
	}),
});
