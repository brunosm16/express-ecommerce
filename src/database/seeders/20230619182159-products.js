/* eslint-disable no-unused-vars */

const { mockCategories } = require('../mocks/mock-categories');
const { mockProducts } = require('../mocks/mock-products');
const { dropTablesArray } = require('./helpers/delete-tables-array');

const seedCategories = async (queryInterface) => {
	const categories = mockCategories();
	await queryInterface.bulkInsert('categories', categories);
	return categories.map(({ id }) => id);
};

const seedProducts = async (queryInterface) => {
	const categoryIds = await seedCategories(queryInterface);
	const formattedProducts = mockProducts().map((product, idx) => ({
		...product,
		category_id: categoryIds[idx],
	}));

	return queryInterface.bulkInsert('products', formattedProducts);
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return seedProducts(queryInterface);
	},

	async down(queryInterface, Sequelize) {
		return dropTablesArray(['categories', 'products'], queryInterface);
	},
};
