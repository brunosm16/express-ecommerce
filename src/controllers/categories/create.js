const { persistCategory } = require('../../services/categories/create-category');

module.exports = async ({ body }) => persistCategory(body);
