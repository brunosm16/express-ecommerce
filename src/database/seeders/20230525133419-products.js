const { bulkInsertTables } = require('./helpers/bulk-insert-tables');

/* eslint-disable no-unused-vars */
const { seedProducts } = require('../mocks/seed-products');
const { dropTables } = require('./helpers/drop-tables');

const tablesAndRelations = {
	table: 'products',
	relations: [
		{
			foreign_key: 'category_id',
			table: 'categories',
		},
	],
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await bulkInsertTables(tablesAndRelations, queryInterface);
	},

	async down(queryInterface, Sequelize) {
		await dropTables(tablesAndRelations, queryInterface);
	},
};
