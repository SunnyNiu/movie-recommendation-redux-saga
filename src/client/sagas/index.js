import { all, call } from 'redux-saga/effects';
import movieSaga from './movieSaga';
import recommendMovieSaga from './recommendMovieSaga';

export function* rootSaga() {
  yield all([call(movieSaga), call(recommendMovieSaga)]);
}
