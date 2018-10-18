module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '',
      database: 'book_store_db',
      port: 5433,
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
      database: 'book_store_test_db',
      user: 'postgres',
      password: '',
      port: 5433,
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
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
  },
};
