/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn('addresses', 'created_at', {
			allowNull: false,
			type: Sequelize.DATE,
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.changeColumn('addresses', 'created_at', {
			allowNull: false,
			type: Sequelize.DATE,
		});
	},
};
