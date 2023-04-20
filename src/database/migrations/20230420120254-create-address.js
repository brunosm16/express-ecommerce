/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Addresses', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			city: { type: Sequelize.STRING, allowNull: false },
			state: { type: Sequelize.STRING, allowNull: false },
			street: { type: Sequelize.STRING, allowNull: false },
			district: { type: Sequelize.STRING, allowNull: false },
			zipcode: { type: Sequelize.STRING, allowNull: false },
			number: { type: Sequelize.INTEGER, allowNull: false },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deletedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('addresses');
	},
};
