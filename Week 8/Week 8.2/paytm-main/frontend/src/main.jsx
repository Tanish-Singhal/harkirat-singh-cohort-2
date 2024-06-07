import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        path: "/dashboard", 
        element: <Dashboard /> 
      },
      { 
        path: "/send", 
        element: <SendMoney /> 
      },
    ],
  },
  { 
    path: "/signup", 
    element: <Signup /> 
  },
  { 
    path: "/signin", 
    element: <Signin /> 
  },
  { 
    path: "*", 
    element: <NotFoundPage /> 
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
