const { findCategoryById } = require('../../services/categories/find-category');

module.exports = async ({ params }) => findCategoryById(params?.id);
