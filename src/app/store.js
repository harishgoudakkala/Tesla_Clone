import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/CarSlice/CarSlice"

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
