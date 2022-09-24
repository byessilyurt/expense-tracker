import { BsDownload } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../redux/values";

function Header() {
  const { currencies, selectedCurrency } = useSelector((state) => state.values);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(changeCurrency(e.target.value));
    console.log(selectedCurrency.payload);
  };

  const listCurrencies = () => {
    return (
      <div className="flex">
        <select
          className="bg-transparent border-none outline-none"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          {currencies.map((item, index) => (
            <option key={index} value={item}>
              {item === "USD"
                ? "$"
                : item === "EUR"
                ? "€"
                : item === "TRY"
                ? "₺"
                : null}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="flex justify-between items-center m-4 p-4">
      <div className="ml-8 text-3xl font-bold p-2 text-black">
        Expense Tracker
      </div>
      <div>
        <button className="bg-transparent hover:text-blue-500 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
          <BsDownload className="inline-block mr-2" />
          <span className="md:block hidden">Download</span>
        </button>
        <button className="bg-transparent hover:text-blue-500 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
          <span className="inline-block mr-2"> {listCurrencies()} </span>
          <span className="md:block hidden">Download</span>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
          <BiLogIn className="inline-block mr-2" />
          <span className="md:block hidden">Login</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
