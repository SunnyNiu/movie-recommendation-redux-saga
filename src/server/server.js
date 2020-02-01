import path from 'path';
import express from 'express';
import request from 'request-promise-native';
import db from './db/db';

const TASTEDIVE_API = 'https://tastedive.com/api/similar?q=';
const APIKey = '352362-MovieRec-XIQL1KMA';

const server = express();
server.use(express.static(path.join(__dirname, './public')));
server.use(express.json());

server.get('/movie', (req, res) => {
  const { moviesIds: moviesIdsStr } = req.query;
  const moviesIds = moviesIdsStr
    ? moviesIdsStr.split(',').map(item => parseInt(item, 10))
    : [];

  db.getRandomMovie(moviesIds)
    .then(movie => res.json(movie))
    .catch(e => {
      // eslint-disable-next-line no-console
      console.error(e);
      res.status(500).send('Internal Server Error');
    });
});

server.get('/recommend/:liked', (req, res) => {
  const { liked } = req.params;
  request
    .get(`${TASTEDIVE_API}${liked}&info=1&type=movie&verbose=1&k=${APIKey}`)
    .then(body => res.json(JSON.parse(body)))
    .catch(e => {
      // eslint-disable-next-line no-console
      console.error(e);
      res.status(500).send('Internal Server Error');
    });
});

export default server;
