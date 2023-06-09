const ORDER_PARAMS_TO_PERSIST = Object.freeze([
	'order_total_price',
	'status',
	'user_id',
	'address_id',
]);

const ORDER_PARAMS_TO_EXPOSE = Object.freeze(['order_total_price', 'status']);

module.exports = {
	orderParamsToExpose: ORDER_PARAMS_TO_EXPOSE,
	orderParamsToPersist: ORDER_PARAMS_TO_PERSIST,
};
