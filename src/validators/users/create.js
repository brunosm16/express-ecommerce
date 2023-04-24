const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.BODY]: Joi.object().keys({
		first_name: Joi.string().required(),
		last_name: Joi.string().required(),
		primary_email: Joi.string().email().required(),
		secondary_email: Joi.string().email().required(),
		date_of_birth: Joi.string().isoDate().required(),
		password: Joi.string().required().min(8),
	}),
});
