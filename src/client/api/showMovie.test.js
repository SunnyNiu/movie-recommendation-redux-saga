import fetch from 'isomorphic-fetch';

const { getRandomMovie, getRecommendMovies } = require('./showMovie');

jest.mock('isomorphic-fetch');

describe('apis tests', () => {
  it('getRandomMovie return a response object with correct movies', () => {
    const expected = [{ name: 'Iron Man' }, { name: 'The Incredible Hulk' }];
    const excludeIds = [2, 3];

    fetch.mockReturnValueOnce(
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(expected),
      })
    );

    return getRandomMovie(excludeIds).then(result => {
      expect(result).toEqual(expected);
    });
  });

  it('getRecommendMovies return a correct movies', () => {
    const expected = [{ name: 'Iron Man' }, { name: 'The Incredible Hulk' }];
    const movies = ['Thor', 'Logan'];

    fetch.mockReturnValueOnce(
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(expected),
      })
    );

    return getRecommendMovies(movies).then(recommendedMovies => {
      expect(recommendedMovies).toEqual(expected);
    });
  });
});
