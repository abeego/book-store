const express = require('express');
const router = express.Router();

const Books = require('../repositories/books');

router.post('/', (req, res) => {
	const book = req.body;

	const { error } = Books.validate(book);

	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	Books.addBook(book).then(b => {
		res.status(201).json(b);
	});
});

router.get('/', (req, res) => {
	Books.getAll().then(b => {
		res.status(200).json(b);
	});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Books.deleteBook(id).then(b => {
		res.status(200).json(b);
	});
});

router.put('/:id', (req, res) => {
	const book = req.body;
	const { id } = req.params;

	const { error } = Books.validate(book);

	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}

	Books.updateBook(id, book).then(b => {
		res.status(200).json(b);
	});
});

module.exports = router;
