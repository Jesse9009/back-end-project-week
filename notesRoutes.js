const express = require('express');

// importing query builder(knex) and setting up access to database
// const knex = require('knex');
// const dbConfig = require('./knexfile');
// const db = knex(dbConfig.development);

const router = express.Router();

router.get('/', (req, res) => {});

module.exports = router;
