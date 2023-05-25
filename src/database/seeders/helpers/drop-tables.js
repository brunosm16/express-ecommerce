const getRelationsTable = (relations) => relations.map(({ table }) => table);

const dropTables = (tablesAndRelations, queryInterface) => {
	if (!tablesAndRelations?.table) throw new Error('Table not provided');

	const { table } = tablesAndRelations;

	const tablesToDelete = [table, ...getRelationsTable(tablesAndRelations?.relations)];

	const promises = tablesToDelete.map((currentTable) =>
		queryInterface.bulkDelete(currentTable, null, {})
	);

	return Promise.all(promises);
};

module.exports = { dropTables };
