import { configureStore } from "@reduxjs/toolkit";
import valuesReducer from "./values";

export default configureStore({
  reducer: { values: valuesReducer },
});
