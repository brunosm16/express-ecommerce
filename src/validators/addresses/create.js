const { celebrate, Segments, Joi } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	[Segments.BODY]: Joi.object().keys({
		city: Joi.string().required(),
		state: Joi.string().required(),
		street: Joi.string().required(),
		district: Joi.string().required(),
		zipcode: Joi.string().required(),
		number: Joi.string().required(),
		user_id: Joi.string().required(),
	}),
});
