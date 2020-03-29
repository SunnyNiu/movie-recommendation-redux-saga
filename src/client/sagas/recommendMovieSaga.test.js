import { expectSaga } from 'redux-saga-test-plan';
import { fetchRecommendMoviesByLikedMovies } from './recommendMovieSaga';
import { getRecommendMovies } from '../api/showMovie';
import { searchMovie } from '../reducers/movie.types';

jest.mock('../api/showMovie');

describe('fetch movie', () => {
  it('put a REC_MOVIE_FETCH_SUCCEEDED action when succeeded', () => {
    const likedMovies = ['The Avengers'];
    const movieList = {
      Similar: { Results: ['iron man2', 'captial america'] },
    };
    const movies = ['iron man2', 'captial america'];

    getRecommendMovies.mockReturnValueOnce(Promise.resolve(movieList));
    return expectSaga(fetchRecommendMoviesByLikedMovies, { likedMovies })
      .call(getRecommendMovies, likedMovies)
      .put({ type: searchMovie.REC_MOVIE_FETCH_SUCCEEDED, movies })
      .run();
  });

  it('put a REC_MOVIE_FETCH_FAILED action on error', () => {
    const likedMovies = ['The Avengers'];
    const error = new Error('recommend movie failed');
    getRecommendMovies.mockReturnValueOnce(Promise.reject(error));
    return expectSaga(fetchRecommendMoviesByLikedMovies, { likedMovies })
      .call(getRecommendMovies, likedMovies)
      .put({
        type: searchMovie.REC_MOVIE_FETCH_FAILED,
        message: 'recommend movie failed',
      })
      .run();
  });
});
