const { celebrate, Joi, Segments } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	[Segments.BODY]: Joi.object().keys({
		building_number: Joi.number().optional(),
		city: Joi.string().optional(),
		state: Joi.string().optional(),
		street: Joi.string().optional(),
		zip_code: Joi.string().optional(),
		user_id: Joi.string().required(),
	}),
});
