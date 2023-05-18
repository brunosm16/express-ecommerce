/* eslint-disable no-unused-vars */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('addresses', 'customer_id', {
			type: Sequelize.UUID,
			allowNull: false,
			references: { model: 'users', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('addresses', 'customer_id');
	},
};
