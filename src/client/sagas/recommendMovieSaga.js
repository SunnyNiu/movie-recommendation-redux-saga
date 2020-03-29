import { call, put, takeEvery } from 'redux-saga/effects';
import { getRecommendMovies } from '../api/showMovie';
import { searchMovie } from '../reducers/movie.types';

// worker Saga: will be fired on REC_MOVIE_FETCH_REQUESTED actions
export function* fetchRecommendMoviesByLikedMovies(action) {
  try {
    const movieList = yield call(getRecommendMovies, action.likedMovies);
    const movies = yield movieList.Similar.Results;

    yield put({ type: searchMovie.REC_MOVIE_FETCH_SUCCEEDED, movies });
  } catch (e) {
    yield put({ type: searchMovie.REC_MOVIE_FETCH_FAILED, message: e.message });
  }
}

// Starts fetchMovie on each dispatched 'REC_MOVIE_FETCH_REQUESTED' action. Allows concurrent fetches of movie
export default function* recommendMoviesSaga() {
  yield takeEvery(
    searchMovie.REC_MOVIE_FETCH_REQUESTED,
    fetchRecommendMoviesByLikedMovies
  );
}
