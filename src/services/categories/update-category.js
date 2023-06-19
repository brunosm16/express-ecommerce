const { CATEGORY_NOT_FOUND } = require('../../constants/messages/entities-messages/categories');
const { PRODUCT_NOT_FOUND } = require('../../constants/messages/entities-messages/products');
const { categoriesParams } = require('../../constants/params');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { NotFoundError } = require('../../errors/instances');
const { ProductModel } = require('../../models');
const CategoryModel = require('../../models/CategoryModel');
const { findEntityByPk } = require('../entities/find-entity');
const { updateEntity } = require('../entities/persist-entity');

const runValidations = async (categoryId, productId) => {
	const category = await findEntityByPk(CategoryModel, categoryId);
	if (!category) throw new NotFoundError(CATEGORY_NOT_FOUND);

	const product = await findEntityByPk(ProductModel, productId);
	if (!product) throw new NotFoundError(PRODUCT_NOT_FOUND);
};

const updateCategoryById = async (id, body) => {
	const { product_id } = body;
	await runValidations(id, product_id);

	const result = updateEntity(
		CategoryModel,
		body,
		{ id },
		categoriesParams.categoryParamsToPersist
	);

	return makeTableResultCode(result);
};

module.exports = { updateCategoryById };
