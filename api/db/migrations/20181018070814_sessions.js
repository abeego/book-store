exports.up = function(knex, Promise) {
	return knex.schema.createTable('sessions', tbl => {
		tbl
			.string('sid')
			.notNullable()
			.collate('default');
		tbl.json('sess').notNullable();
		tbl.timestamp('expired', 6).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('sessions');
};
