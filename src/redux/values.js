import { createReducer } from "@reduxjs/toolkit";

/* Selector */
const selectValuesState = (rootState) => rootState.values;
export const selectValuesList = (rootState) =>
  selectValuesState(rootState).values;
/* Reducer  */
const initialState = {
  incomes: [11, 2, 3],
  expenses: [],
};

const reducer = createReducer(initialState, {});

export default reducer;
