import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    email: "",
    firstname: "",
    lastname: "",
    cnic: "",
    simNumber: "",
    simStatus: "",
    address: ""
  },
  auth: null
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      state.auth = true;
    },
    signOutUser: (state, action) => {
      state.data = initialState.data;
      state.auth = false;
    }
  }
});

export const { setDataUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;