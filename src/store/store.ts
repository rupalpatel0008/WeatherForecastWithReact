import { configureStore } from "@reduxjs/toolkit";
import { locationReducer, weatherReducer } from "./slices";

const store = configureStore({
  reducer: { location: locationReducer, weather: weatherReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
