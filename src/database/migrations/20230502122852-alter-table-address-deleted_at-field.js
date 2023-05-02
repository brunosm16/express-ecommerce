module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn('addresses', 'deleted_at', {
			allowNull: true,
			type: Sequelize.DATE,
			defaultValue: null,
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.changeColumn('addresses', 'deleted_at', {
			allowNull: false,
			type: Sequelize.DATE,
		});
	},
};
