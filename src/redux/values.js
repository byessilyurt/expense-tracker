import { createSlice } from "@reduxjs/toolkit";

export const valuesSlice = createSlice({
  name: "incomeExpenseValues",
  initialState: {
    income: [],
    expense: [],
    currencies: ["USD", "EUR", "TRY"],
    selectedCurrency: { payload: "USD" },
  },
  reducers: {
    addIncome: (state, newIncome) => {
      state.income.push(newIncome);
    },
    removeIncome: () => {},
    addExpense: (state, newExpense) => {
      state.expense.push(newExpense);
    },
    removeExpense: () => {},
    changeCurrency: (state, newCurrency) => {
      state.selectedCurrency = newCurrency;
    },
  },
});

export const {
  addIncome,
  removeIncome,
  addExpense,
  removeExpense,
  changeCurrency,
} = valuesSlice.actions;

export default valuesSlice.reducer;
