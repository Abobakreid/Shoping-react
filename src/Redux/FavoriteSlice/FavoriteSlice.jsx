import { createSlice } from "@reduxjs/toolkit";

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteElements: [],
  },
  reducers: {
    addFavElement: (state, action) => {
      const findEle = state.favoriteElements.find((item) => {
        return item.id === action.payload.id;
      });
      if (!findEle) {
        state.favoriteElements.push({ ...action.payload, fav: "active" });
      }
    },
    deletedFavElement: (state, action) => {
      state.favoriteElements = state.favoriteElements.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { addFavElement, deletedFavElement } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
