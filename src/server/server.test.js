import request from 'supertest';
import server from './server';
import { getRandomMovie } from './db/db';

jest.mock('./db/db');
jest.mock('request-promise-native');

describe('get random movie', () => {
  it('GET /movie', () => {
    const data = { id: 2, name: 'Test2', image: './image1.png' };
    getRandomMovie.mockReturnValueOnce(Promise.resolve(data));
    return request(server)
      .get('/movie')
      .then(res => {
        expect(res.body).toEqual(data);
      });
  });
});
