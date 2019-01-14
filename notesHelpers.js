// importing query builder(knex) and setting up access to database
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);
