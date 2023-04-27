const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.PARAMS]: Joi.object()
		.keys({
			id: Joi.string().required(),
		})
		.unknown(),
	[Segments.HEADERS]: Joi.object()
		.keys({
			authorization: Joi.string().required(),
		})
		.unknown(),
});
