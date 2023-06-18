const { findUserById } = require('../../services/users/find-user');

module.exports = async ({ params }) => findUserById(params?.id);
