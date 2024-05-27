import { configureStore } from "@reduxjs/toolkit";
import doctorsSlice from "../reducers/doctors.slice";

export const store = configureStore({
  reducer: {
    doctors: doctorsSlice,
  },
});
