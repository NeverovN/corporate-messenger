import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

// reducers
// import savedMessageReducer from './reducers/savedMessage';
import reducer from './reducers/rootReducer';

// sagas
import root from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(root);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
