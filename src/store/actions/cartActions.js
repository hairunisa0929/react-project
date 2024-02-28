import { ADD_TO_CART, DECREMENT_QTY, INCREMENT_QTY } from "../types";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const incrementQty = (id) => ({
  type: INCREMENT_QTY,
  id,
});

export const decrementQty = (id) => ({
  type: DECREMENT_QTY,
  id,
});
