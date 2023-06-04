const validateTablesAndRelations = (tablesAndRelations) => {
	if (!tablesAndRelations?.table) throw new Error(`Table not provided`);
	if (!tablesAndRelations.relations?.length) throw new Error(`Relations not provided`);

	const { relations } = tablesAndRelations;

	const hasInvalidRelation = relations.some(({ foreign_key, table }) => !foreign_key || !table);
	if (hasInvalidRelation) throw new Error(`The right parameters was not provided in relations`);
};

module.exports = { validateTablesAndRelations };
