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
		customer_id: Joi.string().required(),
	}),
});
