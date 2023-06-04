const { faker } = require('@faker-js/faker');
const { mockEntity } = require('./mock-entity');

const buildAddress = () => ({
	id: faker.datatype.uuid(),
	building_number: faker.datatype.number(),
	city: faker.address.city(),
	state: faker.address.state(),
	street: faker.address.street(),
	zip_code: faker.address.zipCode(),
});

const mockAddresses = (quantity) => mockEntity(buildAddress, quantity);

module.exports = { mockAddresses };
