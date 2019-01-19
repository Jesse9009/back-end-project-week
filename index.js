require('dotenv').config(); // load the .env content
// Import required packages and files
const express = require('express');
const notesRouter = require('./notesRoutes');
const helmet = require('helmet');
const cors = require('cors');

// Creating server
const server = express();

// Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// Root endpoint
server.get('/', (req, res) => {
  res.send('Home Page');
});

///api/notes endpoint inside router
server.use('/api/notes', notesRouter);

//
const PORT = process.env.PORT || 4040;

server.listen(PORT, () => {
  console.log(`\n=== Server is up and running on port ${PORT} ===\n`);
});
