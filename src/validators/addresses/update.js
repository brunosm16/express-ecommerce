const { celebrate, Joi, Segments } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	[Segments.BODY]: Joi.object().keys({
		city: Joi.string().optional(),
		state: Joi.string().optional(),
		street: Joi.string().optional(),
		district: Joi.string().optional(),
		zipcode: Joi.string().optional(),
		number: Joi.string().optional(),
		user_id: Joi.string().required(),
	}),
});
