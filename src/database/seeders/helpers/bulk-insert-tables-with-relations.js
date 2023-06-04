const getMock = require('../../mocks');
const { validateTablesAndRelations } = require('./validate-tables-relations');

const FIXED_LENGTH_MOCK_ENTITY_RELATIONSHIP = 1;

const throwNotProvidedTable = (table) => {
	throw new Error(`No mock provided for table: ${table}`);
};

const getSeedFn = (table) => {
	const seedFn = getMock[table];
	if (!seedFn) throwNotProvidedTable(table);
	return seedFn;
};

const getRelationsIds = async (relations, queryInterface) => {
	const promises = relations.map(async ({ table, foreign_key }) => {
		const seedFn = getSeedFn(table);
		const entityRelationship = seedFn(FIXED_LENGTH_MOCK_ENTITY_RELATIONSHIP);
		const { id } = entityRelationship[0];

		await queryInterface.bulkInsert(table, entityRelationship);

		return {
			[foreign_key]: id,
		};
	});

	return Promise.all(promises);
};

const getMockedValues = (table, relationsIds) => {
	const seedFn = getSeedFn(table);
	return seedFn().map((current) => Object.assign(current, ...relationsIds));
};

const bulkInsertTablesWithRelations = async (tablesAndRelations, queryInterface) => {
	validateTablesAndRelations(tablesAndRelations);

	const { relations, table } = tablesAndRelations;

	const relationsIds = await getRelationsIds(relations, queryInterface);

	const mockedValues = getMockedValues(table, relationsIds);

	await queryInterface.bulkInsert(table, mockedValues);

	return mockedValues;
};

module.exports = { bulkInsertTablesWithRelations };
