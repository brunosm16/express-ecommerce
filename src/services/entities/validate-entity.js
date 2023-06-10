const { EntityExistsError, EntityNotExistsError } = require('../../errors/instances');

const validateEntityNotExistsByPk = async (id, Model) => {
	const entity = await Model.findByPk(id);
	if (!entity) throw new EntityNotExistsError();
};

const entityExistsByPk = async (id, Model, message, shouldExists = true) => {
	const entity = await Model.findByPk(id);

	if (shouldExists && !entity) throw new EntityNotExistsError(message);

	if (!shouldExists && entity) throw new EntityExistsError(message);
};

module.exports = { validateEntityNotExistsByPk, entityExistsByPk };
