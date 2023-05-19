/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('products', 'category_id', {
			type: Sequelize.UUID,
			allowNull: false,
			references: { model: 'categories', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('products', 'category_id');
	},
};
