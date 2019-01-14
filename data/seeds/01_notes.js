exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('notes').insert([
        { tags: '', title: 'note 1', textBody: 'note one text body' },
        { tags: '', title: 'note 2', textBody: 'note two text body' },
        { tags: '', title: 'note 3', textBody: 'note three text body' }
      ]);
    });
};
