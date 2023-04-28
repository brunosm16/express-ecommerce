const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.HEADERS]: Joi.object()
		.keys({
			authorization: Joi.string().required(),
		})
		.unknown(),
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.string().required(),
	}),
	[Segments.BODY]: Joi.object().keys({
		first_name: Joi.string().optional().min(6),
		last_name: Joi.string().optional().min(6),
		primary_email: Joi.string().email().optional(),
		secondary_email: Joi.string().email().disallow(Joi.ref('primary_email')).optional().messages({
			'any.invalid': 'Secondary email must be different from primary_email',
		}),
		date_of_birth: Joi.string().isoDate().optional(),
		current_password: Joi.string().required().min(8),
		new_password: Joi.string().optional().min(8),
		admin: Joi.boolean().optional(),
	}),
});
