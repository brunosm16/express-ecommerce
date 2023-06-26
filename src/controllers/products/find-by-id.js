const { findProductById } = require('../../services/products/find-product');

module.exports = async ({ params }) => findProductById(params?.id);
