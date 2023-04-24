const { faker } = require('@faker-js/faker');
const { mockEntity } = require('./base-mock');

const buildUser = () => ({
	id: faker.datatype.uuid(),
	first_name: faker.name.firstName(),
	last_name: faker.name.lastName(),
	primary_email: faker.internet.email(),
	secondary_email: faker.internet.email(),
	date_of_birth: faker.date.birthdate(),
	password_hash: faker.datatype.uuid(),
	reset_password_token: faker.datatype.uuid(),
	reset_password_expire_date: faker.datatype.uuid(),
	admin: faker.datatype.boolean(),
});

const seedUsers = (quantity = 5) => {
	return mockEntity(buildUser, quantity);
};

module.exports = { seedUsers };
