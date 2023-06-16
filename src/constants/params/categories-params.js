const CATEGORY_PARAMS_TO_PERSIST = Object.freeze(['name', 'product_id', 'parent_category_id']);
const CATEGORY_PARAMS_TO_EXPOSE = Object.freeze(['name', 'product_id', 'parent_category_id']);

module.exports = {
	categoryParamsToPersist: CATEGORY_PARAMS_TO_PERSIST,
	categoryParamsToExpose: CATEGORY_PARAMS_TO_EXPOSE,
};
