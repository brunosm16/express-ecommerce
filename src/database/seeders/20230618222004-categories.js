/* eslint-disable no-unused-vars */

const { mockCategories } = require('../mocks/mock-categories');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('categories', mockCategories(15));
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('categories');
	},
};
