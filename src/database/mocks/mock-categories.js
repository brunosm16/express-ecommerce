const { faker } = require('@faker-js/faker');
const { mockEntity } = require('./mock-entity');

const buildCategory = () => ({
	id: faker.datatype.uuid(),
	name: faker.commerce.productAdjective(),
	created_at: faker.date.recent(),
});

const mockCategories = (quantity) => mockEntity(buildCategory, quantity);

module.exports = { mockCategories };
