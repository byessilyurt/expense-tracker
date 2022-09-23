import { useState } from "react";

import Button from "./Button";
import Input from "./Input";

import { GrAdd } from "react-icons/gr";

const inputStyles = {
  backgroundColor: "transparent",
  color: "gray",
  border: "none",
  outline: "none",
};

function AddIncome({ type }) {
  const [switchInputs, setSwitchInputs] = useState(false);

  const handleInputs = () => {
    return (
      <div className="flex flex-row-reverse bg-white shadow-xl p-2 pr-4 mt-4">
        <Button
          text={<GrAdd />}
          onClick={() => setSwitchInputs((prev) => !prev)}
          type="button"
        />
        {switchInputs ? (
          <Input
            style={inputStyles}
            type="number"
            placeholder="Amount"
            onChange={(e) => console.log(e.target.value)}
          />
        ) : (
          <Input
            style={inputStyles}
            type="text"
            placeholder={
              type === "income" ? "Income Resource" : "Expense Category"
            }
            onChange={(e) => console.log(e.target.value)}
          />
        )}
      </div>
    );
  };
  return (
    <div className="block">
      <header className="text-xl font-light tracking-widest">
        {type === "income" ? "Incomes" : "Expenses"}
      </header>
      {handleInputs()}
    </div>
  );
}
export default AddIncome;
