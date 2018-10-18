import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import Cart from './cart';

const CartList = () => {
	return (
		<Grid>
			<Row>
				<Cart />
			</Row>
		</Grid>
	);
};

export default CartList;
