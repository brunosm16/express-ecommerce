const fs = require('fs');
const path = require('path');

const getFileKeyModule = (normalizedPath, file) => {
	const module = `${normalizedPath}/${file}`;

	const isFile = fs.lstatSync(module).isFile();

	if (!isFile) return null;

	const [key] = file.split('.');

	return {
		key,
		module,
	};
};

const requireBySourceAndDir = (source, dir) => {
	const normalizedPath = path.join(source, dir);

	const requires = {};

	fs.readdirSync(normalizedPath).forEach((file) => {
		const fileKeyModule = getFileKeyModule(normalizedPath, file);

		if (fileKeyModule) {
			const { key, module } = fileKeyModule;

			// eslint-disable-next-line import/no-dynamic-require, global-require
			requires[key] = require(module);
		}
	});

	return requires;
};

module.exports = requireBySourceAndDir;
