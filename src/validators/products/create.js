const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.HEADERS]: Joi.object()
		.keys({
			authorization: Joi.string().required(),
		})
		.unknown(),
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		description: Joi.string().required(),
		price: Joi.string().required(),
		quantity_in_stock: Joi.string().required(),
		quantity_sold: Joi.string().required(),
		discount_percent: Joi.string().required(),
		discount_start_date: Joi.string().isoDate().optional(),
		discount_end_date: Joi.string().isoDate().when('discount_start_date', {
			is: Joi.exist(),
			then: Joi.required(),
			otherwise: Joi.optional(),
		}),
		width: Joi.string().required(),
		height: Joi.string().required(),
		length: Joi.string().required(),
		sku: Joi.string().required(),
	}),
});
