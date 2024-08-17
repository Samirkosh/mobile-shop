import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./PhoneSlice";

export const store = configureStore({
  reducer: {
    myPhone: phoneReducer,
  },
});
