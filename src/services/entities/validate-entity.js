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

const validateEntitiesAssociation = async (TableAssociation) => {
	const { ParentTable, ChildTable } = TableAssociation;

	const { ParentModel, parentId, parentName } = ParentTable;
	const { childId, childName } = ChildTable;

	const parentData = await ParentModel.findByPk(parentId, {
		include: {
			association: childName,
			where: {
				id: childId,
			},
			required: false,
		},
	});

	if (!parentData) {
		const message = `Entity from '${parentName}' does not exists`;
		throw new EntityNotExistsError(message);
	}

	if (!parentData?.[childName]?.length) {
		const message = `'${childName}' not found for '${parentName}'`;
		throw new EntityNotExistsError(message);
	}
};

module.exports = { validateEntityNotExistsByPk, entityExistsByPk, validateEntitiesAssociation };
