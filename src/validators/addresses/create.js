const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.HEADERS]: Joi.object()
		.keys({
			authorization: Joi.string().required(),
		})
		.unknown(),

	[Segments.BODY]: Joi.object().keys({
		city: Joi.string().required(),
		state: Joi.string().required(),
		street: Joi.string().required(),
		district: Joi.string().required(),
		zipcode: Joi.string().required(),
		number: Joi.string().required(),
	}),
});
