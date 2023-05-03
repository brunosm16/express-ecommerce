const CategoryModel = require('../../models/CategoryModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');

const createCategory = (body) => {
	return CategoryModel.create({
		id: generateUUID(),
		...formatBodyParams(body, ['name', 'product_id']),
	});
};

module.exports = { createCategory };
