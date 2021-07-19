import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  messageText: string | null;
}

const initialState: CounterState = {
  messageText: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<string>) => {
      state.messageText = action.payload;
    },
    remove: (state) => {
      state.messageText = null;
    },
  },
});

export const { save, remove } = counterSlice.actions;

export default counterSlice.reducer;
