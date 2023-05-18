const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const findAddressService = require('../../services/addresses/find-address-service');

module.exports = async (req, res) => {
	try {
		const { userId } = req.params;
		const address = await findAddressService.findAddressByUserId(userId);
		return makeOkResponse(res, address);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
