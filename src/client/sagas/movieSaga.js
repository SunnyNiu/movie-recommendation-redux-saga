import { call, put, takeEvery } from 'redux-saga/effects';
import { getRandomMovie } from '../api/showMovie';
import { searchMovie } from '../reducers/movie.types';

// worker Saga: will be fired on MOVIE_FETCH_REQUESTED actions
export function* fetchMovieById(action) {
  try {
    const movie = yield call(getRandomMovie, action.moviesIds);
    yield put({ type: searchMovie.MOVIE_FETCH_SUCCEEDED, movie });
  } catch (e) {
    yield put({ type: searchMovie.MOVIE_FETCH_FAILED, message: e.message });
  }
}

// Starts fetchMovie on each dispatched 'MOVIE_FETCH_REQUESTED' action. Allows concurrent fetches of movie
export default function* movieSaga() {
  yield takeEvery(searchMovie.MOVIE_FETCH_REQUESTED, fetchMovieById);
}
