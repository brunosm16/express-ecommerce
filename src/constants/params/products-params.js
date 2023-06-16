const PRODUCTS_PARAMS_TO_PERSIST = Object.freeze([
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

const PRODUCTS_PARAMS_TO_EXPOSE = Object.freeze([
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
	productsParamsToPersist: PRODUCTS_PARAMS_TO_PERSIST,
	productsParamsToExpose: PRODUCTS_PARAMS_TO_EXPOSE,
};
