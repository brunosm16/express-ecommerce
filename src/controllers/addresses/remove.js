const { removeAddressById } = require('../../services/addresses/remove-address');

module.exports = async (req) => removeAddressById(req);
