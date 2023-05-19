const { EntityNotExistsError } = require('../../errors/errors-types');
const CategoryModel = require('../../models/CategoryModel');

const findAll = async () => {
	return CategoryModel.findAll({
		attributes: {
			exclude: ['created_at', 'updated_at', 'parent_category_id'],
		},
		order: [['name', 'ASC']],
	});
};

const findCategoryById = async (id) => {
	const category = await CategoryModel.findByPk(id);

	if (!category) throw new EntityNotExistsError();

	return category;
};

module.exports = { findAll, findCategoryById };
