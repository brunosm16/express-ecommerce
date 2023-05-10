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
		total_price: Joi.string().required(),
		status: Joi.string().required(),
	}),
});
