const { persistProduct } = require('../../services/products/create-product');

module.exports = async ({ body }) => persistProduct(body);
