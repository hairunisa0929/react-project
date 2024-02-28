import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";

export default combineReducers({
  checkout: checkoutReducer,
  cart: cartReducer,
});
