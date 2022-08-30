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
    }
  }
});

export const { setNumbers } = numbersSlice.actions;
export default numbersSlice.reducer;