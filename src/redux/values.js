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
    deleteIncome: (state, index) => {
      state.income.splice(index, 1);
    },
    deleteExpense: (state, index) => {
      state.expense.splice(index, 1);
    },
    addExpense: (state, newExpense) => {
      state.expense.push(newExpense);
    },
    changeCurrency: (state, newCurrency) => {
      state.selectedCurrency = newCurrency;
    },
  },
});

export const {
  addIncome,
  deleteIncome,
  addExpense,
  deleteExpense,
  changeCurrency,
} = valuesSlice.actions;

export default valuesSlice.reducer;
