const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.HEADERS]: Joi.object()
		.keys({
			authorization: Joi.string().required(),
		})
		.unknown(),
	[Segments.PARAMS]: Joi.object().keys({
		userId: Joi.string().required(),
	}),
});
