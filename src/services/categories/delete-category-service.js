const CategoryModel = require('../../models/CategoryModel');
const { validateEntityNotExistsByPk } = require('../entities/validate-entity');

const deleteById = async (id) => {
	await validateEntityNotExistsByPk(id, CategoryModel);
	return CategoryModel.destroy({ where: { id } });
};

module.exports = { deleteById };
