exports.up = function(knex) {
  return knex.schema.createTable('movies_genres', t => {
    t.increments('id');
    t.integer('movie_id').notNull();
    t.integer('genre_id').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies_genres');
};
