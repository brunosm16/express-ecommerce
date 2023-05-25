const { faker } = require('@faker-js/faker');
const { mockEntity } = require('./base-mock');

const buildProducts = () => ({
	id: faker.datatype.uuid(),
	name: faker.commerce.product(),
	description: faker.commerce.productDescription(),
	price: faker.commerce.price(),
	quantity_in_stock: faker.datatype.number({ max: 99 }),
	discount_percent: faker.datatype.float({ max: 0.99 }),
	discount_start_date: faker.date.recent(),
	discount_end_date: faker.date.future(),
	width: faker.datatype.float(),
	height: faker.datatype.float(),
	length: faker.datatype.float(),
	sku: faker.datatype.uuid(),
	category_id: faker.datatype.uuid(),
	created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
});

const seedProducts = (quantity = 5) => {
	return mockEntity(buildProducts, quantity);
};

module.exports = { seedProducts };
