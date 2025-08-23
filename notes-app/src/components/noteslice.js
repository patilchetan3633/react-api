import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    { title: "learn Redux", status: true }
  ]
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push({
        title: action.payload,
        status: true
      });
    }
  }
});

export const { add } = noteSlice.actions;
export default noteSlice.reducer;
