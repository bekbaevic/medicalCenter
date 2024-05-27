import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctors: [],
  filteredDoctors: [],
  isLoading: false,
  selectedDoctor: [],
};

export const doctorsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    loaded: (state, action) => {
      state.isLoading = false;
      state.doctors = action.payload;
    },
    error: (state) => {
      state.isLoading = false;
    },
    filtering: (state, action) => {
      state.filteredDoctors = state.doctors.filter(
        (item) => item.role === action.payload
      );
    },
    selecting: (state, action) => {
      state.selectedDoctor = action.payload;
    },
  },
});

export const { loading, loaded, error, filtering, selecting } =
  doctorsSlice.actions;
export default doctorsSlice.reducer;
