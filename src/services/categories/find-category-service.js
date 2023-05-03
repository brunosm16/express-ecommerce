const CategoryModel = require('../../models/CategoryModel');

const findAll = () => {
	return CategoryModel.findAll();
};

module.exports = { findAll };
