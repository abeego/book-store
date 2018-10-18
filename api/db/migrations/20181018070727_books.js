exports.up = function(knex, Promise) {
	return knex.schema.createTable('books', tbl => {
		tbl.increments();
		tbl.string('title', 255).notNullable();
		tbl.text('description').nullable();
		tbl
			.decimal('price', 5, 2)
			.notNullable()
			.defaultTo(0);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('books');
};
