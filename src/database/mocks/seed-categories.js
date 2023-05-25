const { faker } = require('@faker-js/faker');
const { mockEntity } = require('./base-mock');

const buildCategory = () => ({
	id: faker.datatype.uuid(),
	name: faker.commerce.department(),
	created_at: faker.date.recent(),
	updated_at: faker.date.recent(),
});

const seedCategories = (quantity = 5) => {
	return mockEntity(buildCategory, quantity);
};

module.exports = { seedCategories };
