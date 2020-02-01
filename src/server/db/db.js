import knex from 'knex';
import knexfile from '../../../knexfile';

const environment = process.env.NODE_ENV || 'development';
const connection = knex(knexfile[environment]);

function getRandomMovie(excludes, db = connection) {
  return db('movies')
    .whereNotIn('id', excludes)
    .orderBy(knex.raw('RANDOM()'))
    .select()
    .first();
}

module.exports = {
  getRandomMovie,
};
