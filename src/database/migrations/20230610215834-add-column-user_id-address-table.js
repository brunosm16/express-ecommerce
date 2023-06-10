/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.addColumn('addresses', 'user_id', {
			type: Sequelize.UUID,
			allowNull: false,
			references: { model: 'users', key: 'id' },
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.removeColumn('addresses', 'user_id');
	},
};
