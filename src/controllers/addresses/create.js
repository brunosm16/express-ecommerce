const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const createAddressService = require('../../services/addresses/create-address-service');

module.exports = async (req, res) => {
	try {
		const address = await createAddressService.createAddress(req.body);
		return makeOkResponse(res, address);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
