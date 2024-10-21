import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationState } from "../../types";

const initialState: LocationState = {
  lat: null,
  long: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (
      state,
      action: PayloadAction<{ lat: number; long: number }>
    ) => {
      state.lat = action.payload.lat;
      state.long = action.payload.long;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
