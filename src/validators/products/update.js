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
		name: Joi.string().optional(),
		description: Joi.string().optional(),
		price: Joi.string().optional(),
		quantity_in_stock: Joi.string().optional(),
		quantity_sold: Joi.string().optional(),
		discount_percent: Joi.string().optional(),
		discount_start_date: Joi.string().isoDate().optional(),
		discount_end_date: Joi.string().isoDate().when('discount_start_date', {
			is: Joi.exist(),
			then: Joi.required(),
			otherwise: Joi.optional(),
		}),
		width: Joi.string().optional(),
		height: Joi.string().optional(),
		length: Joi.string().optional(),
		sku: Joi.string().optional(),
	}),
});
