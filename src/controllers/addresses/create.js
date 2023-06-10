const { persistAddress } = require('../../services/addresses/create-address');

module.exports = async (req) => persistAddress(req);
