const { EntityNotExistsError } = require('../../errors/instances');
const OrderModel = require('../../models/OrderModel');
const { validateNonExistingUserById } = require('../users/validate-user');

const orderAttrsToExclude = ['createdAt', 'updatedAt', 'user_id'];
const addressAttrsToExclude = ['createdAt', 'updatedAt', 'deletedAt', 'customer_id', 'id'];

const findAll = async (req) => {
	const { query } = req;
	const { limit = 10, offset = 0 } = query;

	const orders = await OrderModel.findAll({
		order: [['id', 'DESC']],
		limit,
		offset,
	});

	const count = await OrderModel.count({ col: 'id' });

	return { orders, count };
};

const findOrderById = async (id) => {
	const order = await OrderModel.findByPk(id);

	if (!order) throw new EntityNotExistsError();

	return order;
};

const excludeAttrs = (attrs) => ({
	exclude: [...attrs],
});

const getAssociations = () => [
	{
		association: 'address',
		attributes: excludeAttrs(addressAttrsToExclude),
		required: false,
	},
];

const findOrdersByUserId = async (req) => {
	const { query, params } = req;
	const { id: user_id } = params;
	const { limit = 10, offset = 0 } = query;

	await validateNonExistingUserById(user_id);

	const orders = await OrderModel.findAll({
		order: [['id', 'DESC']],
		where: {
			user_id,
		},
		limit,
		offset,
		attributes: excludeAttrs(orderAttrsToExclude),
		include: getAssociations(),
	});

	return { orders, count: orders?.length };
};

module.exports = { findAll, findOrderById, findOrdersByUserId };
