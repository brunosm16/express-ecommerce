const { persistUserUpdate } = require('../../services/users/update-user');

module.exports = async ({ body, params }) => persistUserUpdate(body, params?.id);
