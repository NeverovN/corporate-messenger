import { createReducer, createAction } from '@reduxjs/toolkit';

export interface CounterState {
  messageText: string | null;
}

const initialState: CounterState = {
  messageText: null,
};

export const save = createAction<string>('SAVE_MESSAGE');
export const remove = createAction('REMOVE_MESSAGE');

export const counterSlice = createReducer(initialState, (builder) => {
  builder
    .addCase(save, (state, action) => {
      state.messageText = action.payload;
    })
    .addCase(remove, (state) => {
      state.messageText = null;
    });
});

export default counterSlice;
