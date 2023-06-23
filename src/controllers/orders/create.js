const createOrderService = require('../../services/orders/create-order');

module.exports = async ({ body }) => createOrderService.persistOrder(body);
