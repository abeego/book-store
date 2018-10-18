const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const knex = require('./db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    store: new KnexSessionStore({
      knex: knex,
      tablename: 'sessions',
    }),
    secret: 'mySecretString',
    resave: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 2 },
    saveUninitialized: false,
  })
);

const booksRouter = require('./routes/books');
const cartsRouter = require('./routes/carts');

app.use('/books', booksRouter);
app.use('/cart', cartsRouter);

app.listen(3001, err => {
  if (err) return console.log(err);
  console.log('API Server is listening on http://localhost:3001');
});
