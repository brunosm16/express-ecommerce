/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.changeColumn('products', 'discount_percentage', {
			type: Sequelize.FLOAT,
			allowNull: true,
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.changeColumn('products', 'discount_percentage', {
			type: Sequelize.DECIMAL,
			allowNull: true,
		});
	},
};
