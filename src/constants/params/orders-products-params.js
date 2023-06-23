const ORDER_PRODUCTS_PARAMS_TO_PERSIST = Object.freeze(['order_id', 'product_id']);

const ORDER_PRODUCTS_PARAMS_TO_EXPOSE = Object.freeze(['order_id', 'product_id']);

module.exports = {
	ordersProductsParamsToPersist: ORDER_PRODUCTS_PARAMS_TO_PERSIST,
	ordersProductsParamsToExpose: ORDER_PRODUCTS_PARAMS_TO_EXPOSE,
};
