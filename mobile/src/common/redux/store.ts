import { configureStore } from '@reduxjs/toolkit';

// slices
import counterReducer from './slices/counter';

export const store = configureStore({ reducer: { counter: counterReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
