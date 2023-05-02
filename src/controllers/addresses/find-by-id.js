const { makeResponseByError, makeOkResponse } = require('../../http/http-responses');
const findAddressService = require('../../services/addresses/find-address-service');

module.exports = async (req, res) => {
	try {
		const { id } = req.params;
		const address = await findAddressService.findById(id);
		return makeOkResponse(res, address);
	} catch (err) {
		return makeResponseByError(res, err);
	}
};
