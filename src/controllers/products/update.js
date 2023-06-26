const { persistProductUpdate } = require('../../services/products/update-product');

module.exports = async ({ params, body }) => persistProductUpdate(params?.id, body);
