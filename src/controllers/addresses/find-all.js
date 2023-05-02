const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const findAddressService = require('../../services/addresses/find-address-service');

module.exports = async (req, res) => {
	try {
		const addresses = await findAddressService.findAll();
		return makeOkResponse(res, addresses);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
