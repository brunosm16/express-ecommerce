/* eslint-disable no-unused-vars */

const { RelationTable } = require('../instances');
const { mockAddresses } = require('../mocks/mock-addresses');
const { mockOrders } = require('../mocks/mock-orders');
const { mockUsers } = require('../mocks/mock-users');
const { dropTablesWithRelations } = require('./helpers/drop-tables-with-relations');

const makeRelations = () => {
	const users = new RelationTable('user_id', 'users');
	const addresses = new RelationTable('address_id', 'addresses');

	return [users, addresses];
};

const bulkInsertUsers = async (queryInterface) => {
	const users = mockUsers();
	await queryInterface.bulkInsert('users', users);
	return users.map(({ id }) => id);
};

const bulkInsertAddresses = async (users, queryInterface) => {
	const addresses = mockAddresses().map((address, index) => ({
		...address,
		user_id: users[index],
	}));
	await queryInterface.bulkInsert('addresses', addresses);
	return addresses.map(({ id }) => id);
};

const getOrders = async (queryInterface) => {
	const usersIds = await bulkInsertUsers(queryInterface);
	const addressesIds = await bulkInsertAddresses(usersIds, queryInterface);
	return mockOrders().map((order, index) => ({
		...order,
		user_id: usersIds[index],
		address_id: addressesIds[index],
	}));
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const orders = await getOrders(queryInterface);
		return queryInterface.bulkInsert('orders', orders);
	},

	async down(queryInterface, Sequelize) {
		return dropTablesWithRelations(makeRelations(), queryInterface);
	},
};
