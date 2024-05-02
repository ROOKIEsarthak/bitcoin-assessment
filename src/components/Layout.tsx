import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

type props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Readonly<props>) {
  return (
    <div className=" flex flex-row min-h-screen w-[100%] bg-black text-white ">
      <Sidebar />
      <div className="flex flex-col items-center justify-between">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
