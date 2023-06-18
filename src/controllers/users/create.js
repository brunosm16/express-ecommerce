const { persistUser } = require('../../services/users/create-user');

module.exports = async ({ body }) => persistUser(body);
