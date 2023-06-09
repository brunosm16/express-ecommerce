const createAddressService = require('../../services/addresses/create-address-service');

module.exports = async (req) => {
	const address = await createAddressService.createAddress(req.body);
	return address;
};
