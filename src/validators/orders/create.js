const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.HEADERS]: Joi.object()
		.keys({
			authorization: Joi.string().required(),
		})
		.unknown(),
	[Segments.BODY]: Joi.object().keys({
		status: Joi.string().required(),
		user_id: Joi.string().required(),
		address_id: Joi.string().required(),
		products_payload: Joi.array()
			.items({
				quantity_bought: Joi.number().required(),
				product_id: Joi.string().required(),
			})
			.required(),
	}),
});
