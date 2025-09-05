import { Outlet } from "react-router";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const DashboardLayout = () => {
  return (
    <div className="layout flex flex-col ">
      <div className="flex md:gap-20 gap-10">
        {/* Sidebar */}
        <aside>
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className=" w-full min-w-0 overflow-x-hidden">
          <div className="h-full w-full">{<Outlet/>}</div>
        </main>
      </div>

      {/* Footer  */}
      <footer className="mt-6">
        <Footer />
      </footer>
    </div>
  );
};

export default DashboardLayout;
