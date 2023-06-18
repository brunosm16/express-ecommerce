const { categoriesParams } = require('../../constants/params');
const { EntityNotExistsError } = require('../../errors/instances');
const CategoryModel = require('../../models/CategoryModel');
const { findEntityByKey } = require('../entities/find-entity');
const {
	PARENT_CATEGORY_NOT_FOUND_ERROR,
} = require('../../constants/messages/entities-messages/categories');
const { persistEntity } = require('../entities');

const parentCategoryExists = async (id) => {
	const category = await findEntityByKey({ key: 'id', value: id }, CategoryModel);
	if (!category) throw new EntityNotExistsError(PARENT_CATEGORY_NOT_FOUND_ERROR);
};

const persistCategory = async (body) => {
	const { parent_category_id } = body;
	if (parent_category_id) await parentCategoryExists(parent_category_id);

	return persistEntity.saveEntity(
		CategoryModel,
		body,
		categoriesParams.categoryParamsToPersist,
		categoriesParams.categoryParamsToExpose
	);
};

module.exports = { persistCategory };
