module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: '<username>',
      password: '<password>',
      database: 'book_store_dev_db',
    },
    migrations: {
      tableName: 'migrations',
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds/development',
    },
  },

  test: {
    client: 'pg',
    connection: {
      host: '<host>',
      port: 5432,
      database: 'book_store_test_db',
      user: '<username>',
      password: '<password>',
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds/test',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: '<host>',
      port: '<port>',
      database: '<database>',
      user: '<username>',
      password: '<password>',
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
  },
};
