import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carSlice";

const formSlice = createSlice({
  name: "carForm",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    nameInput: (state, action) => {
      state.name = action.payload;
    },
    costInput: (state, action) => {
      state.cost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, (state, action) => ({
      ...state,
      name: "",
      cost: 0,
    }));
  },
});

export const { nameInput, costInput } = formSlice.actions;
export const formReducer = formSlice.reducer;
