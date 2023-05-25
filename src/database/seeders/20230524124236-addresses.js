const { bulkInsertTables } = require('./helpers/bulk-insert-tables');
const { dropTables } = require('./helpers/drop-tables');

/* eslint-disable no-unused-vars */
const tables = ['users', 'addresses'];

const tablesAndRelations = {
	table: 'addresses',
	relations: [
		{
			foreign_key: 'customer_id',
			table: 'users',
		},
	],
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return bulkInsertTables(tablesAndRelations, queryInterface);
	},

	async down(queryInterface, Sequelize) {
		await dropTables(tablesAndRelations, queryInterface);
	},
};
