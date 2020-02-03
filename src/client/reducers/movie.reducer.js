import { searchMovie } from './movie.types';

const INITIAL_STATE = {
  movie: null,
  moviesIds: [],
  likedMovies: [],
  movies: [],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchMovie.MOVIE_FETCH_SUCCEEDED:
      return {
        ...state,
        movie: action.movie,
        moviesIds: [...state.moviesIds, action.movie.id],
      };
    case searchMovie.LIKE_MOVIE:
      return {
        ...state,
        likedMovies: [...state.likedMovies, action.name],
      };
    case searchMovie.REC_MOVIE_FETCH_SUCCEEDED:
      return {
        ...state,
        movies: [...state.movies, action.movies],
      };
    case searchMovie.CLEAR_ALLSTATE:
      return {
        ...state,
        movie: INITIAL_STATE.movie,
        moviesIds: INITIAL_STATE.moviesIds,
        likedMovies: INITIAL_STATE.likedMovies,
        movies: INITIAL_STATE.movies,
      };
    default:
      return state;
  }
};

export default movieReducer;
