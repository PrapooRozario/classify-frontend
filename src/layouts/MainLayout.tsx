import type { ReactNode } from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout mx-auto my-6">
      <div className="flex gap-20">
        <aside>
          <Sidebar />
        </aside>
        <main>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
