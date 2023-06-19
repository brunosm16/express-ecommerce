const ProductModel = require('../../models/ProductModel');
const CategoryModel = require('../../models/CategoryModel');
const { BadRequestError, NotFoundError } = require('../../errors/instances');
const { findAllEntities, findEntityByPk } = require('../entities/find-entity');
const {
	CATEGORY_IS_PARENT_ERROR,
	CATEGORY_IS_EQUAL_ERROR,
	CATEGORY_NOT_FOUND,
	TRANSFER_CATEGORY_NOT_FOUND_ERROR,
} = require('../../constants/messages/entities-messages/categories');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');

const validateCategories = async (categoryId, categoryToTransferId) => {
	if (categoryId === categoryToTransferId) throw new BadRequestError(CATEGORY_IS_EQUAL_ERROR);

	const category = await findEntityByPk(CategoryModel, categoryId);
	const categoryToTransfer = await findEntityByPk(CategoryModel, categoryToTransferId);

	if (!category) throw new NotFoundError(CATEGORY_NOT_FOUND);
	if (!categoryToTransfer) throw new NotFoundError(TRANSFER_CATEGORY_NOT_FOUND_ERROR);
};

const validateCategoryIsParent = async (categoryId) => {
	const categories = await findAllEntities(CategoryModel);
	const hasParent = categories
		.map(({ parent_category_id }) => parent_category_id)
		.filter((id) => !!id)
		.some((parentId) => parentId === categoryId);
	if (hasParent) throw new BadRequestError(CATEGORY_IS_PARENT_ERROR);
};

const transferProductCategory = async (categoryId, categoryToTransferId) => {
	const products = await ProductModel.findAll({
		where: {
			category_id: categoryId,
		},
	});

	if (!products?.length) return;

	const promises = products.map(async ({ id }) => {
		return ProductModel.update({ category_id: categoryToTransferId }, { where: { id } });
	});

	await Promise.all(promises);
};

const runValidations = async (categoryId, categoryToTransferId) => {
	await validateCategoryIsParent(categoryId);
	await validateCategories(categoryId, categoryToTransferId);
	await transferProductCategory(categoryId, categoryToTransferId);
};

const removeCategoryById = async (categoryId, categoryToTransferId) => {
	await runValidations(categoryId, categoryToTransferId);
	const result = await CategoryModel.destroy({ where: { id: categoryId } });
	return makeTableResultCode(result);
};

module.exports = { removeCategoryById };
