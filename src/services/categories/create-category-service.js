const { categoriesParams } = require('../../constants/params');
const CategoryModel = require('../../models/CategoryModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');
const { findCategoryById } = require('./find-category-service');

const createCategory = async (body) => {
	const { parent_category_id } = body;

	if (parent_category_id) await findCategoryById(parent_category_id);

	return CategoryModel.create({
		id: generateUUID(),
		...formatBodyParams(body, categoriesParams.categoryParamsToPersist),
	});
};

module.exports = { createCategory };
