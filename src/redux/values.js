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
    editIncome: (state, { index, newIncome }) => {
      state.income[index] = newIncome;
    },
    addExpense: (state, newExpense) => {
      state.expense.push(newExpense);
    },
    deleteExpense: (state, index) => {
      state.expense.splice(index, 1);
    },
    editExpense: (state, { index, newExpense }) => {
      state.expense[index] = newExpense;
    },
    changeCurrency: (state, newCurrency) => {
      state.selectedCurrency = newCurrency;
    },
  },
});

export const {
  addIncome,
  deleteIncome,
  editIncome,
  addExpense,
  deleteExpense,
  editExpense,
  changeCurrency,
} = valuesSlice.actions;

export default valuesSlice.reducer;
