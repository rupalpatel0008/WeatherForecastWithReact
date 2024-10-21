import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../const";
import { LatLongParams } from "../types";

export const getWeatherByLatLong = createAsyncThunk(
  "weather/fetchWeatherByLatLongRequest",
  async ({ latitude, longitude }: LatLongParams, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast.json`, {
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
export const getWeatherByCity = createAsyncThunk(
  "weather/fetchWeatherByCityRequest",
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast.json`, {
        params: {
          key: API_KEY,
          q: city,
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
