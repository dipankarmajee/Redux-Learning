import { createSlice, nanoid } from "@reduxjs/toolkit";

const carData = createSlice({
  name: "carData",
  initialState: {
    carData: [],
    searchTerm: "",
  },
  reducers: {
    addCar: (state, action) => {
      const newCar = {
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      };
      state.carData.push(newCar);
    },

    deleteCar: (state, action) =>
      state.carData.filter((eachCar) => eachCar.id !== action.payload),
    searchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCar, deleteCar, searchTerm } = carData.actions;
export const carDataReducer = carData.reducer;
