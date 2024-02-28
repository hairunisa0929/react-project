import { ADD_TO_CART, DECREMENT_QTY, INCREMENT_QTY } from "../types";

const initialState = {
  dataCart: [],
};

const cartReducer = (state = initialState, action) => {
  let duplicateItems = [];

  switch (action.type) {
    case ADD_TO_CART:
      const foundIndex = state.dataCart.findIndex(
        (item) => item.id === action.payload.id
      );

      const newItems = [...state.dataCart];
      if (foundIndex !== -1) {
        newItems[foundIndex] = {
          ...action.payload,
          qty: newItems[foundIndex].qty + action.payload.qty,
        };
      } else {
        newItems.push({ ...action.payload });
      }

      return { ...state, dataCart: newItems };

    case INCREMENT_QTY:
      duplicateItems = state.dataCart.map((item) =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item
      );
      return {
        ...state,
        dataCart: duplicateItems,
      };

    case DECREMENT_QTY:
      duplicateItems = state.dataCart.map((item) =>
        item.id === action.id ? { ...item, qty: item.qty - 1 } : item
      );
      return {
        ...state,
        dataCart: duplicateItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
