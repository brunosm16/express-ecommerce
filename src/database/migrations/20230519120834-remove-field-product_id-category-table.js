/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.removeColumn('categories', 'product_id');
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.addColumn('categories', 'product_id');
	},
};
