import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen layout">
      {/* Header */}
      <header className="w-full">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow my-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
