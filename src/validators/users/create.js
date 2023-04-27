const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.BODY]: Joi.object().keys({
		first_name: Joi.string().required(),
		last_name: Joi.string().required(),
		primary_email: Joi.string().email().required(),
		secondary_email: Joi.string().email().disallow(Joi.ref('primary_email')).required().messages({
			'any.invalid': 'Secondary email must be different from primary_email',
		}),
		date_of_birth: Joi.string().isoDate().required(),
		password: Joi.string().required().min(8),
		admin: Joi.boolean().required(),
	}),
});
