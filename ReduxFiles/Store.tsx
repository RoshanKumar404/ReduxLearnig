import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";

const store = configureStore({
  reducer: {
    root: RootReducer,
    // Add other reducers here if needed
  },
});

export default store;
