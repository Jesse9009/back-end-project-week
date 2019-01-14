// importing query builder(knex) and setting up access to database
const db = require('./dbConfig');

module.exports = {
  getNotes
};

function getNotes() {
  return db('notes');
}
