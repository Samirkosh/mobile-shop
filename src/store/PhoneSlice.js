import { createSlice } from "@reduxjs/toolkit";
import { phoneShop } from "../api/constants";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    phoneShop,
    newPhone: {},
  },
  reducers: {
    addPhone: (state, action) => {
      console.log(action.payload);

      const phone = state.phoneShop.find(
        (item) => item.id === action.payload.id
      );
      if (phone) {
        state.newPhone = phone;
      }
    },
  },
});

export const { addPhone } = phoneSlice.actions;
export const phoneReducer = phoneSlice.reducer;
