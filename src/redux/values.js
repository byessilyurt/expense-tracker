import { createSlice } from "@reduxjs/toolkit";
import pieGraphData from "../data";

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
      pieGraphData.income.push({
        x: newIncome.payload.resource,
        y: newIncome.payload.amount,
        text: newIncome.payload.resource,
      });
    },
    deleteIncome: (state, index) => {
      state.income.splice(index.payload, 1);
      pieGraphData.income.splice(index.payload, 1);
    },
    editIncome: (state, { payload }) => {
      state.income[payload.index].payload = payload.newIncome;
      console.log(payload);
      pieGraphData.income[payload.index] = {
        x: payload.newIncome.resource,
        y: payload.newIncome.amount,
        text: payload.newIncome.resource,
      };
    },

    addExpense: (state, newExpense) => {
      state.expense.push(newExpense);
      pieGraphData.expense.push({
        x: newExpense.payload.resource,
        y: newExpense.payload.amount,
        text: newExpense.payload.resource,
      });
    },
    deleteExpense: (state, index) => {
      state.expense.splice(index.payload, 1);
      pieGraphData.expense.splice(index.payload, 1);
    },
    editExpense: (state, { payload }) => {
      state.expense[payload.index].payload = payload.newExpense;
      pieGraphData.expense[payload.index] = {
        x: payload.newExpense.resource,
        y: payload.newExpense.amount,
        text: payload.newExpense.resource,
      };
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
