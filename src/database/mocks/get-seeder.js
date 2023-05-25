const { seedAddresses } = require('./seed-addresses');
const { seedCategories } = require('./seed-categories');
const { seedProducts } = require('./seed-products');
const { seedUsers } = require('./seed-users');

module.exports = Object.freeze({
	users: seedUsers,
	addresses: seedAddresses,
	categories: seedCategories,
	products: seedProducts,
});
