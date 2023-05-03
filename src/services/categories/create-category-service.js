const { CATEGORY_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const CategoryModel = require('../../models/CategoryModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { generateUUID } = require('../cryptography/cryptography-service');

const createCategory = (body) => {
	return CategoryModel.create({
		id: generateUUID(),
		...formatBodyParams(body, CATEGORY_PARAMS_TO_CREATE_UPDATE),
	});
};

module.exports = { createCategory };
