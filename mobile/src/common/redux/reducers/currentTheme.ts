import { createReducer, createAction } from '@reduxjs/toolkit';

export interface CounterState {
  theme: string;
}

const initialState: CounterState = {
  theme: 'light',
};

export const toggle = createAction('TOGGLE_THEME');
export const set = createAction<'light' | 'dark'>('SET_THEME');

const message = createReducer(initialState, (builder) => {
  builder
    .addCase(toggle, (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    })
    .addCase(set, (state, action) => {
      state.theme = action.payload;
    });
});

export default message;
