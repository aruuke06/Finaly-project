import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import cartReducer from "./cartSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});


