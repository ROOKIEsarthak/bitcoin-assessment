import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="flex absoulute flex-col items-center justify-center bg-[#161C23] rounded-lg">
        <div className="flex flex-col">
          <button>
            <Link to={"/"}>Home</Link>
          </button>
          <button>
            <Link to={"/wallet"}>Wallet</Link>
          </button>
          <button>
            <Link to={"/transaction"}>Transaction</Link>
          </button>
        </div>
      </div>
    </>
  );
}
