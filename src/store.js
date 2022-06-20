import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./App/appSlice";

export const store = configureStore({
  reducer: dataReducer,
});
