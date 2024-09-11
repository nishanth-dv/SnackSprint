import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./store-slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
