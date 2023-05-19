/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('orders', 'user_id', {
			allowNull: false,
			type: Sequelize.UUID,
			references: { model: 'users', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('orders', 'user_id');
	},
};
