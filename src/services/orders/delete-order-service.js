const OrderModel = require('../../models/OrderModel');
const { validateEntityNotExistsByPk } = require('../entities/validate-entity');

const deleteOrder = async (id) => {
	await validateEntityNotExistsByPk(id, OrderModel);
	return OrderModel.destroy({ where: { id } });
};

module.exports = { deleteOrder };
