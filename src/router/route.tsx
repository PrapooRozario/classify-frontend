import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/DashboardHome";
import DashboardHome from "../pages/DashboardHome";
import MainLayout from "../layouts/MainLayout";
import LandingPage from "../pages/LandingPage";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateAuthRoute from "./PrivateAuthRoute";
import PrivateRoute from "./PrivateRoute";
import Schedule from "../pages/Schedule";

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
    element: (
      <PrivateAuthRoute>
        <AuthLayout />
      </PrivateAuthRoute>
    ),
    children: [
      { path: "/auth/signin", element: <SignIn /> },
      { path: "/auth/signup", element: <SignUp /> },
      // { path: "/auth/verify-email", element: <VerifyEmail /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/schedule",
        element: <Schedule />,
      },
      {
        path: "/dashboard/budget",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/planner",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/exam",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/leaderboard",
        element: <DashboardHome />,
      },
    ],
  },
]);

export default router;
