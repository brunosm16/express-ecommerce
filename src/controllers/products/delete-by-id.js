const { deleteProductById } = require('../../services/products/delete-product');

module.exports = async ({ params }) => deleteProductById(params?.id);
