import { configureStore } from "@reduxjs/toolkit";
import { api } from "../context/api";
import heartSlice from '../context/Heart'
import cartSlice from '../context/Card'

export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});

