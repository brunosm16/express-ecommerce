const { STORAGE_FOLDER_TEST } = require('../../constants/config-constants');
const { DB_DIALECT, DB_URL } = require('../../env/env-values');

module.exports = {
	storage: STORAGE_FOLDER_TEST,
	dialect: DB_DIALECT,
	url: DB_URL,
};
