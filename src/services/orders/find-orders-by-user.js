const { USER_NOT_FOUND } = require('../../constants/messages/entities-messages/users');
const { addressParamsToExpose } = require('../../constants/params/addresses-params');
const { orderParamsToExpose } = require('../../constants/params/orders-params');
const { productsParamsToExpose } = require('../../constants/params/products-params');
const { ProductModel, AddressModel } = require('../../models');
const OrderModel = require('../../models/OrderModel');
const UserModel = require('../../models/UserModel');
const { entityExistsByPk } = require('../entities/validate-entity');

const getAddressAssociation = () => ({
	model: AddressModel,
	attributes: addressParamsToExpose,
	as: 'address',
	required: true,
});

const getProductsAssociation = () => ({
	model: ProductModel,
	as: 'products',
	attributes: productsParamsToExpose,
	required: true,
	through: {
		attributes: [],
	},
});

const getValuesFromParams = (params) => ({ user_id: params?.id });
const getValuesFromQuery = (query) => ({ limit: query?.limit || 10, offset: query?.offset || 0 });

const findOrdersByUserId = async (query, params) => {
	const { user_id } = getValuesFromParams(params);
	const { limit, offset } = getValuesFromQuery(query);

	await entityExistsByPk(user_id, UserModel, USER_NOT_FOUND);

	const orders = await OrderModel.findAll({
		order: [['status', 'DESC']],
		where: {
			user_id,
		},
		limit,
		offset,
		attributes: [...orderParamsToExpose],
		include: [getAddressAssociation(), getProductsAssociation()],
	});

	return { orders, count: orders?.length };
};

module.exports = { findOrdersByUserId };
