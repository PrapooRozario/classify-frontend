import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout min-h-screen flex flex-col ">
      <div className="flex md:gap-20 gap-10">
        {/* Sidebar */}
        <aside>
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className=" w-full min-w-0 overflow-x-hidden">
          <div className="h-full w-full">{children}</div>
        </main>
      </div>

      {/* Footer  */}
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
