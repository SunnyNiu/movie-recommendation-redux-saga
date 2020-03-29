import { expectSaga } from 'redux-saga-test-plan';
import { fetchMovieById } from './movieSaga';
import { getRandomMovie } from '../api/showMovie';
import { searchMovie } from '../reducers/movie.types';

jest.mock('../api/showMovie');

describe('fetch movie', () => {
  it('put a MOVIE_FETCH_SUCCEEDED action when succeeded', () => {
    const moviesIds = [1, 2, 3];
    const movie = { id: 91, name: 'Iron man2' };
    getRandomMovie.mockReturnValueOnce(Promise.resolve(movie));
    return expectSaga(fetchMovieById, { moviesIds })
      .call(getRandomMovie, moviesIds)
      .put({ type: searchMovie.MOVIE_FETCH_SUCCEEDED, movie })
      .run();
  });

  it('put a MOVIE_FETCH_FAILED action on error', () => {
    const moviesIds = [1, 2, 3];
    const error = new Error('fetch movie failed');
    getRandomMovie.mockReturnValueOnce(Promise.reject(error));
    return expectSaga(fetchMovieById, { moviesIds })
      .call(getRandomMovie, moviesIds)
      .put({
        type: searchMovie.MOVIE_FETCH_FAILED,
        message: 'fetch movie failed',
      })
      .run();
  });
});
