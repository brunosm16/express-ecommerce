const { categoriesParams } = require('../../constants/params');
const { EntityNotExistsError } = require('../../errors/instances');
const CategoryModel = require('../../models/CategoryModel');
const { findAllEntities } = require('../entities/find-entity');

const findAllCategories = async () =>
	findAllEntities(CategoryModel, categoriesParams.categoryParamsToExpose, [['name', 'ASC']]);

const findCategoryById = async (id) => {
	const category = await CategoryModel.findByPk(id);

	if (!category) throw new EntityNotExistsError();

	return category;
};

module.exports = { findAllCategories, findCategoryById };
