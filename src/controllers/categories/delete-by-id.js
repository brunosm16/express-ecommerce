const { removeCategoryById } = require('../../services/categories/delete-category');

module.exports = async ({ body, params }) =>
	removeCategoryById(params?.id, body?.category_to_transfer_id);
