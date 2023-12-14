import { configureStore } from "@reduxjs/toolkit";
import checkoutSlice from "./reducers/checkoutSlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    checkout: checkoutSlice,
  },
});

export default store;