const { createAddress } = require('../../services/addresses/create-address');

module.exports = async (req) => createAddress(req);
