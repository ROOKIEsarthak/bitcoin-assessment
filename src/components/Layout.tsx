import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

type props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Readonly<props>) {
  return (
    <div className="flex flex-row bg-black text-white ">
      <div className="flex flex-col w-[100%]">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
