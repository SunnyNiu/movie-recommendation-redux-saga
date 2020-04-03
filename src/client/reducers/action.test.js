import {
  fetchMovieCreator,
  fetchMovieSuccess,
  fetchMovieFailure,
  fetchRecommendMoviesCreator,
  fetchRecommendMoviesSuccess,
  fetchRecommendMoviesFailure,
  clearAll,
} from './actions';

import { searchMovie } from './movie.types';

describe('action tests', () => {
  it('send fetch movie request with moviesIds', () => {
    const moviesIds = [2, 4, 89, 10];
    const expected = {
      type: searchMovie.MOVIE_FETCH_REQUESTED,
      moviesIds,
    };

    const actual = fetchMovieCreator(moviesIds);
    expect(actual).toEqual(expected);
  });

  it('it return liked movie', () => {
    const movie = 'Iron man';
    const expected = {
      type: searchMovie.MOVIE_FETCH_SUCCEEDED,
      movie,
    };

    const actual = fetchMovieSuccess(movie);
    expect(actual).toEqual(expected);
  });

  it('fetch movie fails, return error', () => {
    const error = 'fetch movie fail';
    const expected = {
      type: searchMovie.MOVIE_FETCH_FAILED,
      error,
    };

    const actual = fetchMovieFailure(error);
    expect(actual).toEqual(expected);
  });

  it('send fetch recommend movie request with liked movies', () => {
    const likedMovies = [
      { id: 1, name: 'iron man2' },
      { id: 45, name: 'capital american' },
    ];
    const expected = {
      type: searchMovie.REC_MOVIE_FETCH_REQUESTED,
      likedMovies,
    };

    const actual = fetchRecommendMoviesCreator(likedMovies);
    expect(actual).toEqual(expected);
  });

  it('movies return recommended movies', () => {
    const recommendedMovies = [
      { name: 'Joker (I) (2019)', des: 'xx' },
      { name: 'Your Name', des: 'yy' },
    ];
    const expected = {
      type: searchMovie.REC_MOVIE_FETCH_SUCCEEDED,
      movies: recommendedMovies,
    };

    const actual = fetchRecommendMoviesSuccess(recommendedMovies);
    expect(actual).toEqual(expected);
  });

  it('fetch recommend movie fails, return error', () => {
    const error = 'fetch recommend movie fail';
    const expected = {
      type: searchMovie.REC_MOVIE_FETCH_FAILED,
      error,
    };

    const actual = fetchRecommendMoviesFailure(error);
    expect(actual).toEqual(expected);
  });

  it('clearAll returns initial state', () => {
    const expected = {
      type: searchMovie.CLEAR_ALLSTATE,
    };

    const actual = clearAll();
    expect(actual).toEqual(expected);
  });
});
