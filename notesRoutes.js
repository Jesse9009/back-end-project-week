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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  notes
    .getNotes(id)
    .then(note => {
      note[0]
        ? res.json(note)
        : res
            .status(404)
            .json({ Err: `Note with the id of ${id} could not be found` });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  const note = req.body;
  notes
    .createNote(note)
    .then(count => {
      count
        ? res.status(201).json({ message: 'New note was added successfully' })
        : res.status(400).json({ message: 'New note could not be added' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  notes
    .editNote(id, changes)
    .then(count => {
      count
        ? res.status(202).json({ message: 'Note was updated successfully' })
        : res
            .status(404)
            .json({ error: `note with the id of ${id} could not be found` });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  notes
    .deleteNote(id)
    .then(count => {
      count
        ? res.json({ message: 'Note was deleted successfully' })
        : res
            .status(404)
            .json({ message: `Note with id of ${id} was not found` });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
