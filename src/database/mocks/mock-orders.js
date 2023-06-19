const { faker } = require('@faker-js/faker');
const { mockEntity } = require('./mock-entity');

const buildOrder = () => ({
	id: faker.datatype.uuid(),
	order_total_price: faker.datatype.float(),
});

const mockOrders = (quantity) => mockEntity(buildOrder, quantity);

module.exports = { mockOrders };
