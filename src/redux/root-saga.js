import { all, call } from 'redux-saga/effects';
import { getUserWatcher } from './sagas/get-user-saga';

export function* rootSaga() {
  yield all([call(getUserWatcher)]);
}
