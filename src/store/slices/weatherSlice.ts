import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { LatLongParams, WeatherState } from "../../types";

export const fetchWeatherByCityRequest = createAction(
  "weather/fetchWeatherByCityRequest"
);
export const fetchWeatherByCitySuccess = createAction<any>(
  "weather/fetchWeatherByCitySuccess"
);
export const fetchWeatherByCityError = createAction<any>(
  "weather/fetchWeatherByCityError"
);

export const fetchWeatherByLatLongRequest = createAction<LatLongParams>(
  "weather/fetchWeatherByLatLongRequest"
);
export const fetchWeatherByLatLongSuccess = createAction<any>(
  "weather/fetchWeatherByLatLongSuccess"
);
export const fetchWeatherByLatLongError = createAction<any>(
  "weather/fetchWeatherByLatLongError"
);

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCityRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWeatherByCitySuccess,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchWeatherByCityError, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchWeatherByLatLongRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWeatherByLatLongSuccess,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        fetchWeatherByLatLongError,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default weatherSlice.reducer;
