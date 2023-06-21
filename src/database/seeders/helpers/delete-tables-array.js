const dropTablesArray = async (tables, queryInterface) => {
	const promises = tables.map((table) => {
		return queryInterface.bulkDelete(table, {}, null);
	});

	return Promise.all(promises);
};

module.exports = { dropTablesArray };
