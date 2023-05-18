const { ADDRESS_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const AddressModel = require('../../models/AddressModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { validateUserAddressRelation } = require('../users/validate-user-service');

const update = async (addressId, body) => {
	const { customer_id: userId } = body;
	await validateUserAddressRelation(addressId, userId);

	const params = formatBodyParams(body, ADDRESS_PARAMS_TO_CREATE_UPDATE);

	return AddressModel.update({ ...params }, { where: { id: addressId } });
};

module.exports = { update };
