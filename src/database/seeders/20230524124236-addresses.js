/* eslint-disable no-unused-vars */
const { mockAddresses } = require('../mocks/mock-addresses');

const FIXED_MOCK_ADDRESSES_LENGTH = 15;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('addresses', mockAddresses(FIXED_MOCK_ADDRESSES_LENGTH));
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('addresses', null, {});
	},
};
