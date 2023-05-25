const { faker } = require('@faker-js/faker');
const { mockEntity } = require('./base-mock');

const buildAddress = () => ({
	id: faker.datatype.uuid(),
	city: faker.address.city(),
	street: faker.address.street(),
	state: faker.address.state(),
	district: faker.address.zipCodeByState(),
	zipcode: faker.address.zipCode(),
	number: faker.address.buildingNumber(),
});

const seedAddresses = (quantity = 5) => {
	return mockEntity(buildAddress, quantity);
};

module.exports = { seedAddresses };
