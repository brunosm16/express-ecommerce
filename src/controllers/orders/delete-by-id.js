const { removeOrderById } = require('../../services/orders/delete-order');

module.exports = async ({ params }) => removeOrderById(params?.id);
