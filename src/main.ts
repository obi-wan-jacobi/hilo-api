import express from 'express';
import NDAXClient from './NDAXClient';
import settings from './settings.json';

const app = express();

app.get('/', (req, res) => {
  new NDAXClient(settings);
  res.send('hello');
});

app.listen(8080, () => {
  console.log('Listening on 8080');
});
