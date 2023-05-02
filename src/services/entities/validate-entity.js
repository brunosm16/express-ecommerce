const { EntityNotExistsError } = require('../../errors/errors-types');

const validateEntityNotExistsByPk = async (id, Model) => {
	const entity = await Model.findByPk(id);
	if (!entity) throw new EntityNotExistsError();
};

module.exports = { validateEntityNotExistsByPk };
