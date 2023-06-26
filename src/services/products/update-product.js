const { CATEGORY_NOT_FOUND } = require('../../constants/messages/entities-messages/categories');
const { PRODUCT_NOT_FOUND } = require('../../constants/messages/entities-messages/products');
const { productsParams } = require('../../constants/params');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { ProductModel, CategoryModel } = require('../../models');
const { updateEntity } = require('../entities/persist-entity');
const { entityExistsByPk } = require('../entities/validate-entity');

const validateCategory = async ({ category_id }) => {
	if (category_id) {
		await entityExistsByPk(category_id, CategoryModel, CATEGORY_NOT_FOUND);
	}
};

const persistProductUpdate = async (productId, body) => {
	await entityExistsByPk(productId, ProductModel, PRODUCT_NOT_FOUND);

	await validateCategory(body);

	const resultCode = await updateEntity(
		ProductModel,
		body,
		{ id: productId },
		productsParams.productsParamsToPersist
	);

	return makeTableResultCode(resultCode);
};

module.exports = { persistProductUpdate };
