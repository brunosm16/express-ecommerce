const { celebrate, Joi, Segments } = require('celebrate');
const { authorization, params } = require('../base-validators');

module.exports = celebrate({
	...authorization.requiredAuthorizationHeader,
	...params.requiredIdParams,
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		parent_category_id: Joi.string().optional(),
	}),
});
