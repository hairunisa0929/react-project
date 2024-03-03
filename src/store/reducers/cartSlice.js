import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { ...initialState },
  reducers: {
    addToCart(state, action) {
      const id = action.payload.pokemonId;
      const qty = action.payload.qty;
      const existingItem = state.dataCart.find((item) => item.pokemonId === id);

      if (existingItem) {
        state.dataCart.forEach((item) => {
          if (item.pokemonId === id) {
            item.qty = qty;
          }
        });
      } else {
        state.dataCart.push({ ...action.payload });
      }
    },
    incrementQty: (state, action) => {
      const id = action.payload;

      state.dataCart.forEach((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
      });
    },
    decrementQty: (state, action) => {
      const id = action.payload;

      state.dataCart.forEach((item) => {
        if (item.id === id) {
          item.qty -= 1;
        }
      });
    },
  },
});

export const { addToCart, decrementQty, incrementQty } = cartSlice.actions;
export default cartSlice.reducer;
