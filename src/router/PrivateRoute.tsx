import { Navigate, useLocation } from "react-router";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { session } = UserAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation()
  useEffect(() => {
    setLoading(false);
  }, [session]);
  if (loading)
    return (
      <div className="layout relative w-full h-screen flex items-center justify-center">
        <HashLoader color="#ffffff" size={40} />
      </div>
    );

  if (!session?.user.email) {
    return <Navigate to="/auth/signin"  state={{ prevPathname: location.pathname }}/>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
