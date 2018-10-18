const knex = require('../db');
const Joi = require('joi');

function Books() {
	return knex('books');
}

function getAll() {
	return Books().select('*');
}

function getById(id) {
	return Books()
		.where('id', '=', parseInt(id))
		.first('*');
}

function addBook(book) {
	return Books()
		.insert(book)
		.returning('*');
}

function updateBook(id, book) {
	return Books()
		.where('id', '=', parseInt(id))
		.update(book)
		.returning('*');
}

function deleteBook(id) {
	return Books()
		.where('id', '=', parseInt(id))
		.del()
		.returning('*');
}

function validateBook(book) {
	const schema = {
		title: Joi.string()
			.max(45)
			.required(),
		description: Joi.string(),
		price: Joi.number()
			.positive()
			.required(),
	};

	return Joi.validate(book, schema);
}

module.exports = {
	getAll,
	getById,
	addBook,
	updateBook,
	deleteBook,
	validate: validateBook,
};
