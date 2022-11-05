import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice/CartSlice";
import FavoriteSlice from "./FavoriteSlice/FavoriteSlice";
const store = configureStore({
  reducer: {
    CartSlice,
    FavoriteSlice,
  },
});

export default store;
