const { persistUserUpdate } = require('../../services/users/update-user');

module.exports = async (req) => persistUserUpdate(req);
