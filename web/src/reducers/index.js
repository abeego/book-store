'use strict';
import {combineReducers} from 'redux';

import {booksReducer} from './booksReducers';
import {cartReducers} from './cartReducers';

export default combineReducers({
  books: booksReducer,
  cart: cartReducers,
});
