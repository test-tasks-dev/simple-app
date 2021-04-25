import { configureStore } from '@reduxjs/toolkit';
import sagaMiddleware from 'redux-saga';

import { reducer } from './reducer';
import { rootSaga } from './root-saga';

const saga = sagaMiddleware();
export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(rootSaga);
