exports.up = function(knex) {
  return knex.schema.createTable('genres', t => {
    t.increments('id');
    t.string('type').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('genres');
};
