const { ADDRESS_PARAMS_TO_CREATE_UPDATE } = require('../../constants/allowed-params');
const { EntityNotExistsError } = require('../../errors/errors-types');
const AddressModel = require('../../models/AddressModel');
const { formatBodyParams } = require('../../utils/format-body-params');
const { emptyBody } = require('../../utils/object-utils');

const validateAddress = (address, body) => {
	if (!address) throw new EntityNotExistsError();
	emptyBody(body);
};

const update = async (id, body) => {
	const address = await AddressModel.findByPk(id);

	validateAddress(address, body);

	const params = formatBodyParams(body, ADDRESS_PARAMS_TO_CREATE_UPDATE);

	return address.update({ ...params });
};

module.exports = { update };
