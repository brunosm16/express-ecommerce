const USER_PARAMS_TO_UPDATE = Object.freeze([
	'first_name',
	'last_name',
	'primary_email',
	'secondary_email',
	'date_of_birth',
	'current_password',
	'new_password',
	'admin',
]);

const ADDRESS_PARAMS_TO_CREATE_UPDATE = Object.freeze([
	'city',
	'state',
	'street',
	'district',
	'zipcode',
	'number',
]);

const CATEGORY_PARAMS_TO_CREATE_UPDATE = Object.freeze(['name', 'product_id']);

const ORDER_PARAMS_TO_CREATE_UPDATE = Object.freeze(['total_price', 'status']);

module.exports = {
	USER_PARAMS_TO_UPDATE,
	ADDRESS_PARAMS_TO_CREATE_UPDATE,
	CATEGORY_PARAMS_TO_CREATE_UPDATE,
	ORDER_PARAMS_TO_CREATE_UPDATE,
};
