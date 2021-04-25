import {
  takeEvery, put, call,
} from 'redux-saga/effects';

import { RemoteConnector } from '../../utils/RemoteConnector';
import { setUser, fetchingRequest, hasError } from '../reducers/user-reducer';

const remoteConnector = new RemoteConnector();

function* getUser() {
  try {
    yield put(hasError({ status: false, message: '' }));
    yield put(fetchingRequest(true));
    const userData = yield call(remoteConnector.getUser);
    yield put(setUser(userData));
  } catch ({ message }) {
    yield put(hasError({ status: true, message: 'Не удалось получить данные' }));
  } finally {
    yield put(fetchingRequest(false));
  }
}

export function* getUserWatcher() {
  yield takeEvery('user/getUser', getUser);
}