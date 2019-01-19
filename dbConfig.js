// Before learning about pg and dynamic database
// const knex = require('knex');
// const dbConfig = require('./knexfile');

// module.exports = knex(dbConfig.development);

const dbEnvironment = process.env.DB_ENVIRONMENT || 'development';
const dbConfig = require('./knexfile')[dbEnvironment];

module.exports = require('knex')(dbConfig);
