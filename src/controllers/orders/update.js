const { persistOrderUpdate } = require('../../services/orders/update-order');

module.exports = async ({ params, body }) => persistOrderUpdate(params?.id, body);
