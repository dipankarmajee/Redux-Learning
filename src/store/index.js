import { configureStore } from "@reduxjs/toolkit";
import { formReducer, nameInput, costInput } from "./slices/formSlice";
import {
  carDataReducer,
  addCar,
  deleteCar,
  searchTerm,
} from "./slices/carSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carDataReducer,
  },
});

export { store, nameInput, costInput, addCar, deleteCar, searchTerm };
