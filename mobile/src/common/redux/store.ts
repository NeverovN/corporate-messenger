import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

// slices
import savedMessageReducer from './slices/savedMessage';

// sagas
import root from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  savedMessageReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(root);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
