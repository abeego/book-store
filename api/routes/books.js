const express = require('express');
const router = express.Router();

const Books = require('../models/books');

router.post('/', (req, res) => {
	const book = req.body;
	Books.create(book, (err, books) => {
		if (err) throw err;
		res.json(books);
	});
});

router.get('/', (req, res) => {
	Books.find((err, books) => {
		if (err) throw err;
		res.json(books);
	});
});

router.delete('/:_id', (req, res) => {
	const query = { _id: req.params._id };
	Books.deleteOne(query, (err, books) => {
		if (err) throw err;
		res.json(books);
	});
});

router.put('/:_id', (req, res) => {
	const book = req.body;
	const query = req.params._id;

	const updatedBook = {
		$set: {
			title: book.title,
			description: book.description,
			image: book.image,
			price: book.price,
		},
	};
	// When true returns the updated document
	let options = { new: true };

	Books.updateOne(query, updatedBook, options, (err, books) => {
		if (err) throw err;
		res.json(books);
	});
});

module.exports = router;
