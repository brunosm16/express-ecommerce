const { EntityNotExistsError } = require('../../errors/errors-types');
const AddressModel = require('../../models/AddressModel');
const { emptyBody } = require('../../utils/object-utils');

const getAddressParams = (id, { city, state, street, district, zipcode, number }) => ({
	id,
	city,
	state,
	street,
	district,
	zipcode,
	number,
});

const validateAddress = (address, body) => {
	if (!address) throw new EntityNotExistsError();
	emptyBody(body);
};

const update = async (id, body) => {
	const address = await AddressModel.findByPk(id);

	validateAddress(address, body);

	return address.update({ ...getAddressParams(id, body) });
};

module.exports = { update };
