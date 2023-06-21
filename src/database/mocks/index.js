const { mockAddresses } = require('./mock-addresses');
const { mockUsers } = require('./mock-users');
const { mockCategories } = require('./mock-categories');
const { mockOrders } = require('./mock-orders');
const { mockProducts } = require('./mock-products');

module.exports = Object.freeze({
	addresses: mockAddresses,
	users: mockUsers,
	categories: mockCategories,
	orders: mockOrders,
	products: mockProducts,
});
