const environment = process.env.NODE_ENV || 'development';
const config = require('./config')[environment];

module.exports = require('knex')(config);
