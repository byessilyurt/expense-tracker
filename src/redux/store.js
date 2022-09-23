import { configureStore } from "@reduxjs/toolkit";
import valuesReducer from "./values";

const store = configureStore({
  reducer: { values: valuesReducer },
});

export default store;
