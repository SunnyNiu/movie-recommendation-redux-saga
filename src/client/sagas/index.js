import { all, call } from 'redux-saga/effects';
import movieSaga from './movieSaga';

export function* rootSaga() {
  yield all([call(movieSaga)]);
}
