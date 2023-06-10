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
	const { ParentTable, ChildTable, association } = TableAssociation;

	const { ParentModel, parentId, parentName } = ParentTable;
	const { childId, childName } = ChildTable;

	const parentData = await ParentModel.findByPk(parentId, {
		include: {
			association,
			where: {
				id: childId,
			},
			required: false,
		},
	});

	if (!parentData) {
		const message = `${parentName} does not exists`;
		throw new EntityNotExistsError(message);
	}

	if (!parentData?.[association]?.length) {
		const message = `No ${childName} found to ${parentName}`;
		throw new EntityNotExistsError(message);
	}
};

module.exports = { validateEntityNotExistsByPk, entityExistsByPk, validateEntitiesAssociation };
