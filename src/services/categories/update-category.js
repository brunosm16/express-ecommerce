const {
	CATEGORY_NOT_FOUND,
	CATEGORY_IS_EQUAL_ERROR,
} = require('../../constants/messages/entities-messages/categories');
const { categoriesParams } = require('../../constants/params');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { NotFoundError, BadRequestError } = require('../../errors/instances');
const CategoryModel = require('../../models/CategoryModel');
const { findEntityByPk } = require('../entities/find-entity');
const { updateEntity } = require('../entities/persist-entity');

const runValidations = async (categoryId, categoryToTransferId) => {
	if (categoryId === categoryToTransferId) throw new BadRequestError(CATEGORY_IS_EQUAL_ERROR);
	const category = await findEntityByPk(CategoryModel, categoryId);
	if (!category) throw new NotFoundError(CATEGORY_NOT_FOUND);

	if (categoryToTransferId) {
		const categoryToTransfer = await findEntityByPk(CategoryModel, categoryToTransferId);
		if (!categoryToTransfer) throw new NotFoundError(CATEGORY_NOT_FOUND);
	}
};

const updateCategoryById = async (id, body) => {
	const { parent_category_id } = body;
	await runValidations(id, parent_category_id);

	const result = await updateEntity(
		CategoryModel,
		body,
		{ id },
		categoriesParams.categoryParamsToPersist
	);

	return makeTableResultCode(result);
};

module.exports = { updateCategoryById };
