class RelationTable {
	constructor(foreign_key, table) {
		this.foreign_key = foreign_key;
		this.table = table;
	}
}

module.exports = RelationTable;
