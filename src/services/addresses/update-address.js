const { ADDRESS_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const {
	makeChildArgs,
	makeParentArgs,
	makeTableAssociation,
} = require('../../database/factories/make-table-association');
const { ParanoidTableOperation } = require('../../database/instances');
const { UserModel, AddressModel } = require('../../models');
const { updateEntity } = require('../entities/persist-entity');
const { validateEntitiesAssociation } = require('../entities/validate-entity');
const { extractUserAndAddressIds } = require('./addresses-helpers-service');

const validateUserAddressAssociation = async (user_id, address_id) => {
	const userArgs = makeParentArgs(UserModel, user_id, 'users');
	const addressArgs = makeChildArgs(AddressModel, address_id, 'addresses');
	const AssociationTable = makeTableAssociation(userArgs, addressArgs);
	await validateEntitiesAssociation(AssociationTable);
};

const updateAddressById = async (req) => {
	const { body } = req;
	const { user_id, address_id } = extractUserAndAddressIds(req);

	await validateUserAddressAssociation(user_id, address_id);

	const [result] = await updateEntity(
		AddressModel,
		body,
		{ id: address_id },
		ADDRESS_PARAMS_TO_CREATE_UPDATE
	);

	return new ParanoidTableOperation(false, result);
};

module.exports = { updateAddressById };
