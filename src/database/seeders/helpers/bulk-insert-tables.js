const getSeeder = require('../../mocks/get-seeder');

const getRelationsIds = async (relations, queryInterface) => {
	if (!relations || !relations?.length) return [];

	const promises = relations.map(async ({ table, foreign_key }) => {
		const seedFn = getSeeder[table];

		if (!seedFn) throw new Error(`Invalid table: ${table}`);

		const entity = seedFn(1);

		await queryInterface.bulkInsert(table, entity);

		const { id } = entity[0];

		return {
			[foreign_key]: id,
		};
	});

	return Promise.all(promises);
};

const getSeed = (table, relations) => {
	const seedFn = getSeeder[table];

	if (!seedFn) throw new Error(`Invalid table: ${table}`);

	const seed = seedFn();

	if (relations && relations.length) {
		return seed.map((current) => Object.assign(current, ...relations));
	}

	return seed;
};

const bulkInsertTables = async (tablesAndRelations, queryInterface) => {
	if (!tablesAndRelations?.table) throw new Error(`Table not provided for seed`);

	const { table } = tablesAndRelations;

	const relations = await getRelationsIds(tablesAndRelations?.relations, queryInterface);

	const inserted = getSeed(table, relations);

	await queryInterface.bulkInsert(table, inserted);

	return inserted;
};

module.exports = { bulkInsertTables };
