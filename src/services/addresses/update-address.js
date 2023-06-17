const { addressParamsToPersist } = require('../../constants/params/addresses-params');
const {
	makeChildArgs,
	makeParentArgs,
	makeTableAssociation,
} = require('../../database/factories/make-table-association');
const { makeTableResultCode } = require('../../database/factories/make-table-result-code');
const { UserModel, AddressModel } = require('../../models');
const { updateEntity } = require('../entities/persist-entity');
const { validateEntitiesAssociation } = require('../entities/validate-entity');

const validateUserAddressAssociation = async (user_id, address_id) => {
	const userArgs = makeParentArgs(UserModel, user_id, 'users');
	const addressArgs = makeChildArgs(AddressModel, address_id, 'addresses');
	const AssociationTable = makeTableAssociation(userArgs, addressArgs);
	await validateEntitiesAssociation(AssociationTable);
};

const updateAddressById = async (body, user_id, address_id) => {
	await validateUserAddressAssociation(user_id, address_id);

	const [result] = await updateEntity(
		AddressModel,
		body,
		{ id: address_id },
		addressParamsToPersist
	);

	return makeTableResultCode(result);
};

module.exports = { updateAddressById };
