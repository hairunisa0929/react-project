import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCart: [],
  isLoading: false,
  error: null,
};

export const getCart = createAsyncThunk("cart/getCart", () => {
  const result = axios
    .get("http://localhost:3000/cart")
    .then((res) => res.data);

  return result;
});

export const addToCart = createAsyncThunk("cart/addToCart", (payload) => {
  const result = axios
    .post("http://localhost:3000/cart", payload)
    .then((res) => res.data);

  return result;
});

export const updateCartQty = createAsyncThunk(
  "cart/updateCartQty",
  (payload) => {
    const result = axios
      .put(`http://localhost:3000/cart/${payload.id}`, payload)
      .then((res) => res.data);

    return result;
  }
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (id) => {
    await axios.delete(`http://localhost:3000/cart/${id}`);
    console.log(id);
    return id;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.dataCart = action.payload;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataCart.push({ ...action.payload });
    });
    builder.addCase(updateCartQty.fulfilled, (state, action) => {
      state.isLoading = false;

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
      }
    });
    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      state.dataCart = state.dataCart.filter(
        (item) => item.id !== action.payload
      );
    });
  },
});

export default cartSlice.reducer;
