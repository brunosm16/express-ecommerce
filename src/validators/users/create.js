const { celebrate, Segments, Joi } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	[Segments.BODY]: Joi.object().keys({
		full_name: Joi.string().required(),
		email: Joi.string().required(),
		password: Joi.string().required().min(8),
		is_admin: Joi.boolean().required(),
	}),
});
