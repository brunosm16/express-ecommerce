const { faker } = require('@faker-js/faker');
const { mockEntity } = require('./mock-entity');

const buildProducts = () => ({
	id: faker.datatype.uuid(),
	name: faker.commerce.productName(),
	price: faker.commerce.price(),
	start_discount_date: faker.date.past(),
	end_discount_date: faker.date.future(),
	discount_percentage: faker.datatype.float({ max: 0.8 }),
	quantity_in_stock: faker.datatype.number({ max: 999 }),
	quantity_sold: faker.datatype.number({ max: 999 }),
});

const mockProducts = (quantity) => mockEntity(buildProducts, quantity);

module.exports = { mockProducts };
