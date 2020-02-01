exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('genres')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('genres').insert([
        { id: 1, type: 'Action' },
        { id: 2, type: 'Adventure' },
        { id: 3, type: 'Animation' },
        { id: 4, type: 'Biography' },
        { id: 5, type: 'Comedy' },
        { id: 6, type: 'Crime' },
        { id: 7, type: 'Drama' },
        { id: 8, type: 'Family' },
        { id: 9, type: 'Fantasy' },
        { id: 10, type: 'Film-Noir' },
        { id: 11, type: 'History' },
        { id: 12, type: 'Horror' },
        { id: 13, type: 'Music' },
        { id: 14, type: 'Musical' },
        { id: 15, type: 'Mystery' },
        { id: 16, type: 'Romance' },
        { id: 17, type: 'SciFi' },
        { id: 18, type: 'Sport' },
        { id: 19, type: 'Thriller' },
      ]);
    });
};
