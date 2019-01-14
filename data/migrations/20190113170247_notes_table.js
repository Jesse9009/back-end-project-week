exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', tbl => {
    tbl.string('tags');
    tbl.increments();
    tbl.string('title').notNullable();
    tbl.text('textBody').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes');
};
