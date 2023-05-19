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
	'customer_id',
]);

const CATEGORY_PARAMS_TO_CREATE_UPDATE = Object.freeze([
	'name',
	'product_id',
	'parent_category_id',
]);

const ORDER_PARAMS_TO_CREATE_UPDATE = Object.freeze(['total_price', 'status']);

const PRODUCTS_PARAMS_TO_CREATE_UPDATE = Object.freeze([
	'name',
	'description',
	'price',
	'quantity_in_stock',
	'quantity_sold',
	'discount_percent',
	'discount_start_date',
	'discount_end_date',
	'width',
	'height',
	'length',
	'sku',
]);

module.exports = {
	USER_PARAMS_TO_UPDATE,
	ADDRESS_PARAMS_TO_CREATE_UPDATE,
	CATEGORY_PARAMS_TO_CREATE_UPDATE,
	ORDER_PARAMS_TO_CREATE_UPDATE,
	PRODUCTS_PARAMS_TO_CREATE_UPDATE,
};
