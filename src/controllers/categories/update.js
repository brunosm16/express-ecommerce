const { updateCategoryById } = require('../../services/categories/update-category');

module.exports = async ({ body, params }) => updateCategoryById(params?.id, body);
