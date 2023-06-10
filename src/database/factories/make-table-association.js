const { ChildTable, ParentTable, TableAssociation } = require('../instances');

const makeChildArgs = (Model, childId, childName) => ({ Model, childId, childName });
const makeParentArgs = (Model, parentId, parentName) => ({ Model, parentId, parentName });

const makeChildTable = ({ Model, childId, childName }) => new ChildTable(Model, childId, childName);

const makeParentTable = ({ Model, parentId, parentName }) =>
	new ParentTable(Model, parentId, parentName);

const makeTableAssociation = (parentArgs, childArgs, association) =>
	new TableAssociation(makeParentTable(parentArgs), makeChildTable(childArgs), association);

module.exports = { makeTableAssociation, makeChildArgs, makeParentArgs };
