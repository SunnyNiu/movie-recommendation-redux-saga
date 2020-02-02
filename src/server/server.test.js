const request = require('supertest');

const server = require('./server');

const mockGetMovie = { id: 2, name: 'Test2', image: './image1.png' };

jest.mock('./db/db', () => ({
  getRandomMovie: excludes => Promise.resolve(mockGetMovie),
}));

describe('get random movie', () => {
  it('GET /movie', () => {
    return request(server)
      .get('/movie')
      .then(res => {
        expect(res.body).toEqual(mockGetMovie);
      });
  });
});
