const { celebrate, Joi, Segments } = require('celebrate');

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
		city: Joi.string().optional(),
		state: Joi.string().optional(),
		street: Joi.string().optional(),
		district: Joi.string().optional(),
		zipcode: Joi.string().optional(),
		number: Joi.string().optional(),
	}),
});
