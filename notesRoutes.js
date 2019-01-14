const express = require('express');

const notes = require('./notesHelpers');

const router = express.Router();

router.get('/', (req, res) => {
  notes
    .getNotes()
    .then(notes => {
      notes[0]
        ? res.json(notes)
        : res.status(404).json({ Err: 'No notes found' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
