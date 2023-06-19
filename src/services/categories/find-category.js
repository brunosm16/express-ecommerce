const { CATEGORY_NOT_FOUND } = require('../../constants/messages/entities-messages/categories');
const { categoriesParams } = require('../../constants/params');
const { EntityNotExistsError } = require('../../errors/instances');
const CategoryModel = require('../../models/CategoryModel');
const { findAllEntities, findEntityByPk } = require('../entities/find-entity');

const findAllCategories = async () =>
	findAllEntities(CategoryModel, categoriesParams.categoryParamsToExpose, [['name', 'ASC']]);

const findCategoryById = async (id) => {
	const category = await findEntityByPk(CategoryModel, id, categoriesParams.categoryParamsToExpose);
	if (!category) throw new EntityNotExistsError(CATEGORY_NOT_FOUND);
	return category;
};

module.exports = { findAllCategories, findCategoryById };
