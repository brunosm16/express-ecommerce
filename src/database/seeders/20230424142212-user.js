const { seedUsers } = require('../mocks/seed-users');

module.exports = {
	// eslint-disable-next-line no-unused-vars
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('users', seedUsers(10));
	},

	// eslint-disable-next-line no-unused-vars
	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('users', null, {});
	},
};
