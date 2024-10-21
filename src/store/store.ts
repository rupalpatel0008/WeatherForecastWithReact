import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./slices";

const store = configureStore({
  reducer: { weather: weatherReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
