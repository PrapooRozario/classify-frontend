import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/DashboardHome";
import DashboardHome from "../pages/DashboardHome";
import MainLayout from "../layouts/MainLayout";
import LandingPage from "../pages/LandingPage";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/signin", element: <SignIn /> },
      { path: "/auth/signup", element: <SignUp /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/schedule",
        element: <DashboardHome />,
      },
    ],
  },
]);

export default router;
