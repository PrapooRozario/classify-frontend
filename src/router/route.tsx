import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/DashboardHome";
import DashboardHome from "../pages/DashboardHome";
import MainLayout from "../layouts/MainLayout";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      }
    ]
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
