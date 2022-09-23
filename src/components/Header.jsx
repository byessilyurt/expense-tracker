import { BsDownload } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
function Header() {
  return (
    <div className="flex justify-between items-center m-4 p-4">
      <div className="ml-8 text-3xl font-bold p-2 text-black">
        Expense Tracker
      </div>
      <div>
        <button className="bg-transparent hover:text-blue-500 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">
          <BsDownload className="inline-block mr-2" />
          Download
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
          <BiLogIn className="inline-block mr-2" />
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
