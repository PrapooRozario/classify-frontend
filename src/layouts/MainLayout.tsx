import type { ReactNode } from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout mx-auto">
      <div className="flex items-center gap-40">
        <aside>
          <Sidebar />
        </aside>
        <main className="">{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
