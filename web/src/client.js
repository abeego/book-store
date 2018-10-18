import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlerware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middlerware);

import BookList from './components/booksList';
import CartList from './components/cartList';
import BooksForm from './components/booksForm';
import Menu from './components/menu';
import Footer from './components/footer';

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/admin" component={BooksForm} />
          <Route path="/cart" component={CartList} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Routes, document.getElementById('app'));
