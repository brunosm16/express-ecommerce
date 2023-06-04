const { makeAPIResponse, makeAPIResponseError } = require('../http/responses-handler');

module.exports = (fn) => {
	return async (req, res) => {
		try {
			const result = await fn(req);
			return makeAPIResponse(res, result);
		} catch (err) {
			return makeAPIResponseError(res, err);
		}
	};
};
