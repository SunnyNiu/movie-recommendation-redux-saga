exports.seed = knex =>
  knex('movies')
    .del()
    .then(() =>
      knex('movies').insert([
        { id: 1, name: 'Iron Man', image: '/images/1.png' },
        { id: 2, name: 'The Incredible Hulk', image: '/images/2.png' },
        { id: 3, name: 'Thor', image: '/images/1.png' },
        { id: 4, name: 'The Godfather: Part II', image: '/images/1.png' },
        { id: 5, name: 'The Lives of Others', image: '/images/1.png' },
      ])
    );
