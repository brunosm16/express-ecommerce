const { validateTablesAndRelations } = require('./validate-tables-relations');

const mapRelationTables = (relations) => relations.map(({ table }) => table);

const dropTablesWithRelations = (tablesAndRelations, queryInterface) => {
	validateTablesAndRelations(tablesAndRelations);

	const { table, relations } = tablesAndRelations;

	const tablesToDelete = [table, ...mapRelationTables(relations)];

	const promises = tablesToDelete.map((currentTable) =>
		queryInterface.bulkDelete(currentTable, null, {})
	);

	return Promise.all(promises);
};

module.exports = { dropTablesWithRelations };
