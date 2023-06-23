const { celebrate, Segments, Joi } = require('celebrate');
const { authorization } = require('../base-validators');

module.exports = celebrate({
	...authorization.requiredAuthorizationHeader,
	[Segments.BODY]: Joi.object().keys({
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
