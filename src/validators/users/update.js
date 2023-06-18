const { celebrate, Segments, Joi } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');
const { requiredIdParams } = require('../base-validators/params');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	...requiredIdParams,
	[Segments.BODY]: Joi.object().keys({
		full_name: Joi.string().optional(),
		email: Joi.string().optional(),
		new_password: Joi.string().optional().min(8),
		current_password: Joi.string()
			.min(8)
			.when('new_password', { is: Joi.exist(), then: Joi.required() }),
		is_admin: Joi.boolean().optional(),
	}),
});
