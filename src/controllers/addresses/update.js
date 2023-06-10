const { updateAddressById } = require('../../services/addresses/update-address');

module.exports = async (req) => updateAddressById(req);
