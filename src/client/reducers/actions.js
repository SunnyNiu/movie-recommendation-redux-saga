import { searchMovie } from './movie.types';

export const fetchMovieCreator = moviesIds => ({
  type: searchMovie.MOVIE_FETCH_REQUESTED,
  moviesIds,
});

export const fetchMovieSuccess = movie => ({
  type: searchMovie.MOVIE_FETCH_SUCCEEDED,
  movie,
});

export const fetchMovieFailure = error => ({
  type: searchMovie.MOVIE_FETCH_FAILED,
  error,
});

export const fetchRecommendMoviesCreator = likedMovies => ({
  type: searchMovie.REC_MOVIE_FETCH_REQUESTED,
  likedMovies,
});

export const fetchRecommendMoviesSuccess = movies => ({
  type: searchMovie.REC_MOVIE_FETCH_SUCCEEDED,
  movies,
});

export const fetchRecommendMoviesFailure = error => ({
  type: searchMovie.REC_MOVIE_FETCH_FAILED,
  error,
});

export function likeMovieCreator(name) {
  return {
    type: searchMovie.LIKE_MOVIE,
    name,
  };
}

export function clearAll() {
  return {
    type: searchMovie.CLEAR_ALLSTATE,
  };
}
