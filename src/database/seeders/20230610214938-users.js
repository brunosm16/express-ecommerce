/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */

const { mockUsers } = require('../mocks/mock-users');

const FIXED_MOCK_ADDRESSES_LENGTH = 15;

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('users', mockUsers(FIXED_MOCK_ADDRESSES_LENGTH));
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('users', null, {});
	},
};
