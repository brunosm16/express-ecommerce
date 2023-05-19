const { BadRequestError } = require('../../errors/errors-types');
const { findAll } = require('./find-category-service');
const { validateEntityNotExistsByPk } = require('../entities/validate-entity');
const ProductModel = require('../../models/ProductModel');
const CategoryModel = require('../../models/CategoryModel');

const validateCategories = async (categoryId, categoryToTransferId) => {
	if (categoryId === categoryToTransferId) {
		throw new BadRequestError('Category to transfer should be different then category to delete');
	}

	await validateEntityNotExistsByPk(categoryId, CategoryModel);
	await validateEntityNotExistsByPk(categoryToTransferId, CategoryModel);
};

const validateCategoryIsParent = async (categoryId) => {
	const allCategories = await findAll();

	const hasParent = allCategories.some(
		({ parent_category_id }) => parent_category_id === categoryId
	);

	if (hasParent) {
		throw new BadRequestError(
			`Not possible to delete this category since it's a parent of other category`
		);
	}
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

const deleteById = async (categoryId, categoryToTransferId) => {
	await validateCategoryIsParent(categoryId);

	await validateCategories(categoryId, categoryToTransferId);

	await transferProductCategory(categoryId, categoryToTransferId);

	return CategoryModel.destroy({ where: { id: categoryId } });
};

module.exports = { deleteById };
