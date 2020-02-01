exports.up = function(knex) {
  return knex.schema.table('movies', t => {
    t.string('image').defaultTo('/images/1.png');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('movies', t => {
    t.dropColumns('image');
  });
};
