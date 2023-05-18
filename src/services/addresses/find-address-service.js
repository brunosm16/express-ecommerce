const { USER_NOT_FOUND } = require('../../constants/error-messages');
const { EntityNotExistsError } = require('../../errors/errors-types');
const AddressModel = require('../../models/AddressModel');
const UserModel = require('../../models/UserModel');
const { validateEntityNotExistsByPk } = require('../entities/validate-entity');

const findAll = async () => {
	return AddressModel.findAll();
};

const findAddressByUserId = async (userId) => {
	const user = await UserModel.findByPk(userId, { include: { association: 'addresses' } });

	if (!user) throw new EntityNotExistsError(USER_NOT_FOUND);

	return user.addresses;
};

const findById = async (id) => {
	await validateEntityNotExistsByPk(id, AddressModel);
	return AddressModel.findByPk(id);
};

module.exports = { findAll, findById, findAddressByUserId };
