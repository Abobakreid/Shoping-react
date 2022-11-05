import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartslice",
  initialState: {
    cartelemnts: [],
    totalQuntaty: 0,
    totalAmount: 0,
  },
  reducers: {
    addElement: (state, action) => {
      const findEle = state.cartelemnts.find((item) => {
        return item.id === action.payload.id;
      });

      if (!findEle) {
        state.cartelemnts.push(action.payload);
      }

      const totals = state.cartelemnts.map((items) => {
        return items.price;
      });
      state.totalQuntaty = totals.reduce((tot, itemd) => {
        return tot + itemd;
      });
      state.totalAmount = totals.length;
    },
    deleteElement: (state, action) => {
      state.cartelemnts = state.cartelemnts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.totalQuntaty -= action.payload.price;
      state.totalAmount -= 1;
    },
  },
});

export const { addElement, deleteElement } = cartSlice.actions;
export default cartSlice.reducer;
