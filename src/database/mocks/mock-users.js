const { faker } = require('@faker-js/faker');
const { mockEntity } = require('./mock-entity');

const buildUser = () => ({
	id: faker.datatype.uuid(),
	full_name: faker.name.fullName(),
	email: faker.internet.email(),
	password_hash: faker.datatype.uuid(),
	isAdmin: faker.datatype.boolean(),
});

const mockUsers = (quantity) => mockEntity(buildUser, quantity);

module.exports = { mockUsers };
