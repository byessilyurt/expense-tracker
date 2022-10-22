import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addIncome,
  deleteIncome,
  editIncome,
  addExpense,
  deleteExpense,
  editExpense,
} from "../redux/values";

import Button from "./Button";
import Input from "./Input";
import { GrAdd } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";

const inputStyles = {
  backgroundColor: "transparent",
  color: "gray",
  border: "none",
  outline: "none",
};

const AddValue = ({ type }) => {
  const [switchInputs, setSwitchInputs] = useState(false);
  const [newIncome, setNewIncome] = useState({ amount: 0, resource: "" });
  const [newExpense, setNewExpense] = useState({ amount: 0, resource: "" });
  const [editIncomeValue, setEditIncomeValue] = useState({});
  const [editExpenseValue, setEditExpenseValue] = useState({});
  const [isEditing, setIsEditing] = useState({
    bool: false,
    index: null,
  });
  const { income, expense, selectedCurrency } = useSelector(
    (state) => state.values
  );
  const mapValue = type === "income" ? income : expense;
  const editValue = type === "income" ? editIncomeValue : editExpenseValue;
  const setEditValue =
    type === "income" ? setEditIncomeValue : setEditExpenseValue;
  const dispatch = useDispatch();
  const currency =
    selectedCurrency.payload === "USD"
      ? "$"
      : selectedCurrency.payload === "EUR"
      ? "€"
      : selectedCurrency.payload === "TRY"
      ? "₺"
      : null;

  const handleChange = (e) => {
    if (type === "income") {
      setNewIncome({ ...newIncome, [e.target.name]: e.target.value });
    } else {
      setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
    }
  };
  const handleEditingOnBlur = (index) => {
    if (type === "income") {
      dispatch(editIncome({ index: index, newIncome: editIncomeValue }));
    }
    if (type === "expense") {
      dispatch(editExpense({ index: index, newExpense: editExpenseValue }));
    }
    setIsEditing({ bool: false, index: null });
  };
  const handleAddClick = () => {
    setSwitchInputs((prev) => !prev);
    if (type === "income") {
      if (newIncome?.resource.length > 0 && newIncome?.amount > 0) {
        dispatch(addIncome(newIncome));
        setNewIncome({ amount: 0, resource: "" });
      }
    } else {
      if (newExpense?.resource && newExpense?.amount) {
        dispatch(addExpense(newExpense));
        setNewExpense({ amount: 0, resource: "" });
      }
    }
  };
  const handleDeleteClick = (index) => {
    if (type === "income") {
      dispatch(deleteIncome(index));
    } else {
      dispatch(deleteExpense(index));
    }
  };
  const handleDoubleClick = (index) => {
    if (type === "income") {
      setEditIncomeValue(income[index].payload);
    } else {
      setEditExpenseValue(expense[index].payload);
    }
    setIsEditing({ bool: true, index });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };
  const listValues = () => {
    return (
      <>
        {mapValue?.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center bg-white shadow-xl p-2 pr-4 mt-4"
          >
            <div className="flex flex-col">
              <span className="text-sm font-light">
                <span className="font-medium">{currency} </span>
                {isEditing.bool && isEditing.index === index ? (
                  <Input
                    type="number"
                    value={editValue.amount}
                    name="amount"
                    onChange={(e) =>
                      setEditValue({
                        ...editValue,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={() => handleEditingOnBlur(index)}
                    className="bg-transparent border-none outline-none w-16 text-gray-600"
                  />
                ) : (
                  <span onDoubleClick={() => handleDoubleClick(index)}>
                    {item.payload.amount}
                  </span>
                )}
              </span>
            </div>
            <div className="flex">
              <div className="flex flex-row justify-center items-center bg-transparent hover:bg-gray-200 font-light py-2 px-2 rounded mr-2">
                {isEditing.bool && isEditing.index === index ? (
                  <Input
                    type="text"
                    value={editValue.resource}
                    name="resource"
                    onChange={(e) => {
                      setEditValue({
                        ...editValue,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    onBlur={() => handleEditingOnBlur(index)}
                    className="bg-transparent border-none outline-none w-16 text-gray-600"
                  />
                ) : (
                  <span onDoubleClick={() => handleDoubleClick(index)}>
                    {item.payload.resource}
                  </span>
                )}
              </div>
              <Button
                text={<MdDeleteOutline />}
                type="button"
                onClick={() => {
                  handleDeleteClick(index);
                }}
                className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
              />
            </div>
          </div>
        ))}
      </>
    );
  };
  const handleInputs = () => {
    return (
      <div className="flex flex-row-reverse bg-white shadow-xl p-2 pr-4 mt-4">
        <Button
          text={<GrAdd />}
          onClick={(e) => handleAddClick(e)}
          type="button"
        />
        {switchInputs ? (
          <Input
            style={inputStyles}
            type="number"
            placeholder={`${currency}`}
            name="amount"
            value={type === "income" ? newIncome.amount : newExpense.amount}
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
        ) : (
          <Input
            style={inputStyles}
            type="text"
            name="resource"
            value={type === "income" ? newIncome.resource : newExpense.resource}
            placeholder={
              type === "income" ? "Income Resource" : "Expense Category"
            }
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
        )}
      </div>
    );
  };

  return (
    <div className="block">
      <div>
        <header className="text-xl font-light tracking-widest">
          {type === "income" ? "Incomes" : "Expenses"}
        </header>
        {handleInputs()}
      </div>
      {listValues()}
    </div>
  );
};

export default AddValue;
