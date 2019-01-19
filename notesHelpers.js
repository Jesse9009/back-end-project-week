// importing query builder(knex) and setting up access to database
const db = require('./dbConfig');

module.exports = {
  getNotes,
  createNote,
  editNote,
  deleteNote
};

function getNotes(id) {
  let query = db('notes').orderBy('id');
  return id ? query.where({ id }) : query;
}

function createNote(note) {
  return db('notes').insert(note);
}

function editNote(id, changes) {
  return db('notes')
    .where({ id })
    .update(changes);
}

function deleteNote(id) {
  return db('notes')
    .where({ id })
    .del();
}
