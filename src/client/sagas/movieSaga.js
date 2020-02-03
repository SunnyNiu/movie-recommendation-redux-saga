import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getRandomMovie, getRecommendMovies } from '../api/showMovie';
import { searchMovie } from '../reducers/movie.types';

// worker Saga: will be fired on MOVIE_FETCH_REQUESTED actions
function* fetchMovieById(action) {
  try {
    const movie = yield call(getRandomMovie, action.moviesIds);
    yield put({ type: searchMovie.MOVIE_FETCH_SUCCEEDED, movie });
  } catch (e) {
    yield put({ type: searchMovie.MOVIE_FETCH_FAILED, message: e.message });
  }
}

// Starts fetchMovie on each dispatched 'MOVIE_FETCH_REQUESTED' action. Allows concurrent fetches of movie
function* movieSaga() {
  yield takeEvery(searchMovie.MOVIE_FETCH_REQUESTED, fetchMovieById);
}

// worker Saga: will be fired on REC_MOVIE_FETCH_REQUESTED actions
function* fetchRecommendMoviesByLikedMovies(action) {
  try {
    const movieList = yield call(getRecommendMovies, action.likedMovies);
    const movies = yield movieList.Similar.Results;

    yield put({ type: searchMovie.REC_MOVIE_FETCH_SUCCEEDED, movies });
  } catch (e) {
    yield put({ type: searchMovie.REC_MOVIE_FETCH_FAILED, message: e.message });
  }
}

// Starts fetchMovie on each dispatched 'REC_MOVIE_FETCH_REQUESTED' action. Allows concurrent fetches of movie
function* recommendMoviesSaga() {
  yield takeEvery(
    searchMovie.REC_MOVIE_FETCH_REQUESTED,
    fetchRecommendMoviesByLikedMovies
  );
}

export default function* mySaga() {
  yield all([call(movieSaga), call(recommendMoviesSaga)]);
}
