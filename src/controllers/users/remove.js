const { removeUserById } = require('../../services/users/remove-user');

module.exports = async ({ params }) => removeUserById(params?.id);
