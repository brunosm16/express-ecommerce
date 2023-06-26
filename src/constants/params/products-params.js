const PRODUCTS_PARAMS_TO_PERSIST = Object.freeze([
	'name',
	'price',
	'start_discount_date',
	'end_discount_date',
	'discount_percentage',
	'quantity_in_stock',
	'quantity_sold',
	'category_id',
]);

const PRODUCTS_PARAMS_TO_EXPOSE = Object.freeze([
	'name',
	'price',
	'start_discount_date',
	'end_discount_date',
	'discount_percentage',
	'quantity_in_stock',
	'quantity_sold',
]);

module.exports = {
	productsParamsToPersist: PRODUCTS_PARAMS_TO_PERSIST,
	productsParamsToExpose: PRODUCTS_PARAMS_TO_EXPOSE,
};
