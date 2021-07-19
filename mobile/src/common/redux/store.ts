import { configureStore } from '@reduxjs/toolkit';

// slices
import counterReducer from './slices/counter';
import savedMessageReducer from './slices/savedMessage';

export const store = configureStore({
  reducer: { counter: counterReducer, message: savedMessageReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
