/* eslint-disable no-unused-vars */

const { TableRelations, RelationTable } = require('../instances');
const { bulkInsertTablesWithRelations } = require('./helpers/bulk-insert-tables-with-relations');
const { dropTablesWithRelations } = require('./helpers/drop-tables-with-relations');

const makeRelationsArray = () => {
	const users = new RelationTable('user_id', 'users');

	return [users];
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const addressesWithRelations = new TableRelations('addresses', makeRelationsArray());
		return bulkInsertTablesWithRelations(addressesWithRelations, queryInterface);
	},

	async down(queryInterface, Sequelize) {
		return dropTablesWithRelations(makeRelationsArray(), queryInterface);
	},
};
