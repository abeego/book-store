const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	const cart = req.body;
	req.session.cart = cart;
	// SAVE CART TO SESSION
	req.session.save(err => {
		if (err) throw err;
		res.json(req.session.cart);
	});
});

router.get('/', (req, res) => {
	// SESSION CART
	if (typeof req.session.cart !== 'undefined') res.json(req.session.cart);
});

module.exports = router;
