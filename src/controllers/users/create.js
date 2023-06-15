const { persistUser } = require('../../services/users/create-user');

module.exports = async (req) => persistUser(req);
