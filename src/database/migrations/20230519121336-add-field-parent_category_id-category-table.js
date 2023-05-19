/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('categories', 'parent_category_id', {
			allowNull: true,
			type: Sequelize.UUID,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('categories', 'parent_category_id');
	},
};
