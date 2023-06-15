const { celebrate, Segments, Joi } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');
const { requiredIdParams } = require('../base-validators/params');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	...requiredIdParams,
	[Segments.BODY]: Joi.object().keys({
		full_name: Joi.string().optional(),
		email: Joi.string().optional(),
		current_password: Joi.string().optional().min(8),
		is_admin: Joi.boolean().optional(),
		new_password: Joi.string().optional().min(8),
	}),
});
