exports.up = function(knex) {
  return knex.schema.createTable('movies', t => {
    t.increments('id');
    t.string('name').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
