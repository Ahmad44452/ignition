import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numbers: []
};

export const numbersSlice = createSlice({
  name: 'Numbers',
  initialState,
  reducers: {
    setNumbers: (state, action) => {
      state.numbers = action.payload;
    },
    resetNumbers: (state, acion) => {
      state.numbers = [];
    }
  }
});

export const { setNumbers, resetNumbers } = numbersSlice.actions;
export default numbersSlice.reducer;