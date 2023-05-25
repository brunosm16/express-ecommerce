/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn('addresses', 'updated_at', {
			allowNull: true,
			type: Sequelize.DATE,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.changeColumn('addresses', 'created_at', {
			allowNull: false,
			type: Sequelize.DATE,
		});
	},
};
