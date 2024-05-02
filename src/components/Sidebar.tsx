import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col items-center justify-center mt-10 w-[15vw] ml-10 bg-[#161C23] rounded-lg">
      <div className="flex flex-col justify-start py-20 h-full gap-10">
        <Link
          to={"/"}
          className={`sidebar-link focus:text-[#E2C19D] ${
            pathname === "/" ? "active" : ""
          }`}
        >
          Home
          {pathname === "/" && (
            <div className="w-[50px] h-[2px] bg-[#E2C19D] mt-3 "></div>
          )}
        </Link>
        <div className="border-b border-[#1E2328] w-full"></div>

        <Link
          to={"/wallet"}
          className={`sidebar-link focus:text-[#E2C19D]
        ${pathname === "/wallet" ? "active" : ""}
        `}
        >
          Wallets
          {pathname === "/wallet" && (
            <div className="w-[63px] h-[2px] bg-[#E2C19D] mt-3 "></div>
          )}
        </Link>
        <div className="border-b border-[#1E2328] w-full"></div>

        <Link
          to={"/transaction"}
          className={`sidebar-link focus:text-[#E2C19D] 
        ${pathname === "/transaction" ? "active" : ""}
          `}
        >
          Last Transactions
          {pathname === "/transaction" && (
            <div className="w-[135px] h-[2px] bg-[#E2C19D] mt-3 "></div>
          )}
        </Link>
        <div className="border-b border-[#1E2328] w-full focus:text-[#E2C19D]"></div>
      </div>
      <button className="bg-[#4B3C2B] p-10 rounded-xl flex items-center justify-center w-full">
        Support
      </button>
    </div>
  );
}
