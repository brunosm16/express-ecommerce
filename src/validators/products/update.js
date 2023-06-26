const { celebrate, Joi, Segments } = require('celebrate');
const { authorization, params } = require('../base-validators');

module.exports = celebrate({
	...authorization.requiredAuthorizationHeader,
	...params.requiredIdParams,
	[Segments.BODY]: Joi.object().keys({
		category_id: Joi.string().required(),
		name: Joi.string().required(),
		price: Joi.number().required(),
		start_discount_date: Joi.string().isoDate().optional(),
		end_discount_date: Joi.string().isoDate().when('start_discount_date', {
			is: Joi.exist(),
			then: Joi.required(),
			otherwise: Joi.optional(),
		}),
		discount_percentage: Joi.number().max(1).required(),
		quantity_in_stock: Joi.number().required(),
		quantity_sold: Joi.number().required(),
	}),
});
