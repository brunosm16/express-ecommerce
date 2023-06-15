const { removeUserById } = require('../../services/users/remove-user');

module.exports = async (req) => removeUserById(req);
