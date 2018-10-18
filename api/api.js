const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(
  'mongodb://localhost:27017/book_store',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
  }
);

mongoose.set('useFindAndModify', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, '# MongoDB - connection error: '));

// SESSION
app.use(
  session({
    secret: 'mySecretString',
    saveUninitialized: false,
    resave: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 2 },
    store: new MongoStore({ mongooseConnection: db, ttl: 2 * 24 * 60 * 60 }),
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
