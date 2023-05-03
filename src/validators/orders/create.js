const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.HEADERS]: Joi.object()
		.keys({
			authorization: Joi.string().required(),
		})
		.unknown(),
	[Segments.BODY]: Joi.object().keys({
		total_price: Joi.string().required(),
		status: Joi.string().required(),
	}),
});
