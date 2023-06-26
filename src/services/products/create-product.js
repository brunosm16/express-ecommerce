const { ProductModel, CategoryModel } = require('../../models');
const { entityExistsByPk } = require('../entities/validate-entity');
const { CATEGORY_NOT_FOUND } = require('../../constants/messages/entities-messages/categories');
const { saveEntity } = require('../entities/persist-entity');
const {
	productsParamsToPersist,
	productsParamsToExpose,
} = require('../../constants/params/products-params');

const persistProduct = async (body) => {
	await entityExistsByPk(body?.category_id, CategoryModel, CATEGORY_NOT_FOUND);
	return saveEntity(ProductModel, body, productsParamsToPersist, productsParamsToExpose);
};

module.exports = { persistProduct };
