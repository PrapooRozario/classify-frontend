import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/route.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #262626",
            background: "#171717",
            color: "#FFF",
          },
        }}
      />
    </AuthContextProvider>
  </StrictMode>
);
