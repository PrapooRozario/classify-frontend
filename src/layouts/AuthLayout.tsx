import { Outlet } from "react-router";
const AuthLayout = () => {
  return <div className="layout">{<Outlet />}</div>;
};

export default AuthLayout;
