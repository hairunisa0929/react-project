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
      const userId = action.payload.userId;

      const existingItem = state.dataCart.find(
        (item) => item.pokemonId === id && item.userId === userId
      );

      if (existingItem) {
        state.dataCart.forEach((item) => {
          if (item.pokemonId === id && item.userId === userId) {
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
    removeItem: (state, action) => {
      const id = action.payload;
      state.dataCart = state.dataCart.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, decrementQty, incrementQty, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
