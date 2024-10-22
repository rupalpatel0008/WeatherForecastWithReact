import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../../const";
import { apiInstance } from "../../services/api";
import { LatLongParams, WeatherDataType, WeatherState } from "../../types";

export const fetchWeatherByLatLong = createAsyncThunk<
  WeatherDataType,
  LatLongParams,
  { rejectValue: string }
>(
  "weather/fetchWeatherByLatLong",
  async ({ latitude, longitude }: LatLongParams, { rejectWithValue }) => {
    try {
      const response = await apiInstance.get("/forecast.json", {
        params: {
          key: API_KEY,
          q: `${latitude},${longitude}`,
          days: 5,
          aqi: "no",
        },
      });
      return response.data;
    } catch (error: any) {
      if (error?.response?.data?.error) {
        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(
          "Failed to get weather forcast for your location. Please try later."
        );
      }
    }
  }
);

export const fetchWeatherByCity = createAsyncThunk<
  WeatherDataType,
  string,
  { rejectValue: string }
>("weather/fetchWeatherByCity", async (city, { rejectWithValue }) => {
  try {
    const response = await apiInstance.get("/forecast.json", {
      params: {
        key: API_KEY,
        q: city,
        days: 5,
        aqi: "no",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error?.response?.data?.error?.message) {
      return rejectWithValue(error.response.data.error.message);
    } else {
      return rejectWithValue(
        "Failed to get weather forcast for your location. Please try later."
      );
    }
  }
});

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
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWeatherByCity.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        fetchWeatherByCity.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(fetchWeatherByLatLong.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWeatherByLatLong.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        fetchWeatherByLatLong.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default weatherSlice.reducer;
