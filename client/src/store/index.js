import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import numbersReducer from "./slices/numbersSlice";

export const store = configureStore({
  reducer: {
    userReducer,
    numbersReducer
  }
})