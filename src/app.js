const express = require('express');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();

app.use(express.json());

app.use('/artists', artistRouter);

app.use('/artists', albumRouter);

app.use('/albums', albumRouter);

// not in the music library solution. My Postman connection test.
app.get('/', (_, res) => {
    console.log('Refresh Browser!')
    res.status(200).json({ output: 'Hello from Postman!' });
  });

module.exports = app;
