import type { ReactNode } from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout mx-auto my-6">
      <aside>
        <Sidebar />
      </aside>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
