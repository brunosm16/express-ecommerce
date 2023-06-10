class TableAssociation {
	constructor(ParentTable, ChildTable, association) {
		this.ParentTable = ParentTable;
		this.ChildTable = ChildTable;
		this.association = association;
	}
}

module.exports = TableAssociation;
