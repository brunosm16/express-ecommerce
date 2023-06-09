const { celebrate, Segments, Joi } = require('celebrate');
const { requiredAuthorizationHeader } = require('../base-validators/authorization');

module.exports = celebrate({
	...requiredAuthorizationHeader,
	[Segments.BODY]: Joi.object().keys({
		building_number: Joi.number().required(),
		city: Joi.string().required(),
		state: Joi.string().required(),
		street: Joi.string().required(),
		zip_code: Joi.string().required(),
		user_id: Joi.string().required(),
	}),
});
