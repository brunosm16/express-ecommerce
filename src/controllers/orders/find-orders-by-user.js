const { findOrdersByUserId } = require('../../services/orders/find-orders-by-user');

module.exports = async ({ query, params }) => findOrdersByUserId(query, params);
