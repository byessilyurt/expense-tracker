import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIncome, addExpense } from "../redux/values";

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
  const dispatch = useDispatch();
  const { income, expense, selectedCurrency } = useSelector(
    (state) => state.values
  );

  const handleChange = (e) => {
    if (type === "income") {
      setNewIncome({ ...newIncome, [e.target.name]: e.target.value });
    } else {
      setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
    }
  };
  const handleClick = (e) => {
    setSwitchInputs((prev) => !prev);
    if (type === "income") {
      if (newIncome?.resource.length > 0 && newIncome?.amount > 0) {
        dispatch(addIncome(newIncome));
        setNewIncome({ amount: 0, resource: "" });
      }
      {
      }
    } else {
      if (newExpense?.resource && newExpense?.amount) {
        dispatch(addExpense(newExpense));
        setNewExpense({ amount: 0, resource: "" });
      }
    }
  };
  const listValues = () => {
    const mapValue = type === "income" ? income : expense;
    return (
      <>
        {mapValue?.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center bg-white shadow-xl p-2 pr-4 mt-4"
          >
            <div className="flex flex-col">
              <span className="text-sm font-light">
                {selectedCurrency.payload} {item.payload.amount}
              </span>
            </div>
            <div className="flex">
              <div className="text-sm font-light mr-2">
                {item.payload.resource}
              </div>
              <Button text={<MdDeleteOutline />} type="button" />
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
          onClick={(e) => handleClick(e)}
          type="button"
        />
        {switchInputs ? (
          <Input
            style={inputStyles}
            type="number"
            placeholder="Amount"
            name="amount"
            value={type === "income" ? newIncome.amount : newExpense.amount}
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick(e);
              }
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
              if (e.key === "Enter") {
                handleClick(e);
              }
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
